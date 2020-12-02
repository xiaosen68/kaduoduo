<template>
	<view class="home-box">
		<view class="home-box1">
			<view  class="home-nav">
				<!-- <uni-icons type="phone" @click="goleft" color="#ffffff" size="24"></uni-icons> -->
				<image src="../../static/img/saoma.png" class="leicon" @click="scanFn"  mode=""></image>
				<view class="home-title">
					有粒糖
				</view>
				<view class="riicon-box">
					<image class="riicon" src="../../static/img/xinxi.png" @click="gomessage" mode=""></image>
					<image class="riicon" src="../../static/img/kefu.png" @click="goleft" mode=""></image>
					<!-- <uni-icons type="scan" class="scan-icon" @click="scanFn" color="#ffffff" size="24"></uni-icons> -->
					<!-- <uni-icons type="chat"  color="#ffffff" size="24"></uni-icons> -->
				</view>
			</view>
			<view class="home-main-box">
				<uni-notice-bar scrollable="true" class="home-notice-bar" showIcon="true" color="#ffffff" backgroundColor="#dd4c53" single="true" @click="gomessage" :text="naticeText"></uni-notice-bar>
				<view class="home-main-wrap" >
						<view class=" home-main-item" v-for="(item, index) in main" @click="goweb(item)" v-if="item.pageType!=='0'||ifyue==true" >
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
					{{alertNaticeTextTitle}}
				</view>
				<view class="popup-content">
					{{alertNaticeText}}
				</view>
			</view>
		</uni-popup>
		<!--下载安装包-->
		<uni-popup ref="popupDialog" type="center">
		    <!-- <uni-popup-dialog type="success" mode="base" message="请下载更新" :duration="0" :before-close="true" @close="dialogClose" @confirm="dialogConfirm"></uni-popup-dialog> -->
			<view class="popupcenter">
				<view class="upload-box">
					请下载并更新安装包
				</view>
				<router-link class="upload-btns" to="{name:uploadapp}">
					去下载
				</router-link>
			</view>
		</uni-popup>
		
		
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	export default{
		components:{
			uniPopup,
			uniPopupDialog
		},
		data() {
			return {
				message:'',
				naticeText:'',
				alertNaticeText:'',
				alertNaticeTextTitle:'',
				main :[
				
					{
						name:'收款',
						icon:'../../static/img/main1.png',
						url:'cardstore',
						pageType:'1',
					},
					{
						name:'收款码',
						icon:'../../static/img/bank/shoukuan.png',
						url:'shoukuan',
						pageType:'0',
					},
					// {
					// 	name:'卡券寄售',
					// 	icon:'../../static/img/main2.png',
					// 	url:'waiting',
					// 	pageType:'2'
					// },
					{
						name:'购物',
						icon:'../../static/img/main3.png',
						url:'shop',
						pageType:'3'
					},
					// {
					// 	name:'大额快收',
					// 	icon:'../../static/img/main4.png',
					// 	url:'waiting',
					// 	pageType:'4'
					// },
				],
				model:[
					{
						name:'收益',
						icon:'../../static/img/model1.png',
						url:'fenrun'
					},{
						name:'汽车租赁',
						icon:'../../static/img/model7.png',
						url:'cardstore',
						pageType:'5'
					},{
						name:'酒店票务',
						icon:'../../static/img/model11.png',
						url:'',
						url1:'https://m.ctrip.com/webapp/hotel/?secondwakeup=true&dpclickjump=true&allianceid=66672&sid=1693366&from=http%3A%2F%2Fm.ctrip.com%2Fhtml5%2F'
					},{
						name:'钱包',
						icon:'../../static/img/model4.png',
						url:'yue'
					},{
						name:'会员管理',
						icon:'../../static/img/model5.png',
						url:'myteam'
					},{
						name:'积分兑换',
						icon:'../../static/img/model9.png',
						url:'',
						url1:'https://m.ctrip.com/webapp/lipin/money?secondwakeup=true&dpclickjump=true&allianceid=66672&sid=1693366&from=http%3A%2F%2Fm.ctrip.com%2Fhtml5%2F'
					},{
						name:'订单',
						icon:'../../static/img/model8.png',
						url:'bill'
					},{
						name:'更多',
						icon:'../../static/img/model12.png',
						url:'',
						url1:'https://m.ctrip.com/webapp/cw/gs/onsale/boomHome.html?sct=h5-ggrk&secondwakeup=true&dpclickjump=true&allianceid=4897&sid=155952&ouid=index&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F'
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
				ifyue:true,
				version:'',//版本号
				newVersion:'',//新版本号
				verList:[],
				newVerList:[],
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
						this.alertNaticeTextTitle=res.data.data[0].titel;
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
		onShow(){
			uni.setStorageSync('role','');
			this.getUserRole();
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
					if(res.data.code==0){
						this.naticeText=res.data.data.content;
					}else if(res.data.code==-1){
					}
			       
			    },
				complete(res) {
				}
			});
			// 查询版本号
			//#ifndef H5
			// 获取版本号
			this.getVersion();
			//#endif			
			
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
							// 判断是否为商家
							if(uni.getStorageSync('role')=='BUSINESS'){
							this.ifyue=true	
							}else{
								this.ifyue=false
							}
						}else if(res.data.code==-1){
						}
				       
				    },
					complete(res) {
					}
				});
			},
			// 获取版本号，检查更新
			getVersion:function(){
				this.version=plus.runtime.version;
				this.verList=this.version.split('.');
				this.verList=this.verList.map(Number);
				uni.request({
					method:'GET',
				    url: this.$baseUrl+'/api/v1/pri/my/androidApk', 
				    data: {
				    },
				    header: {
						'token':uni.getStorageSync('token'),
						'Content-Type':'application/json' //自定义请求头信息
				    },
				    success: (res) => {
						if(res.data.code==0){
							this.newVersion=res.data.data.versionName;
							this.newVerList=this.newVersion.split('.');
							 this.newVerList=this.newVerList.map(Number);
							if(this.newVerList[0]>this.verList[0]){
								// 打开下载弹框
								this.$refs.popupDialog.open();
							}else if(this.newVerList[0]==this.verList[0]&&this.newVerList[1]>this.verList[1]){
								// 打开下载弹框
								this.$refs.popupDialog.open();
							}else if(this.newVerList[0]==this.verList[0]&&this.newVerList[1]==this.verList[1]&&this.newVerList[2]>this.verList[2]){
								// 打开下载弹框
								this.$refs.popupDialog.open();
							}
						}else if(res.data.code==-1){
							
						}
				       
				    },
					complete(res) {
					}
				});
			},
			// 获取安装包；
			getandroidApk:function(){
				uni.downloadFile({
				    url: this.$baseUrl+'/apkUrl/youlitang.apk', //仅为示例，并非真实的资源
				    success: (res) => {
				        if (res.statusCode === 200) {
				        }
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
						if(item.pageType=='3'){
							this.$Router.pushTab({name:item.url})
						}else{
							this.$Router.push({name:item.url, params:{pageType:item.pageType}})
						}
					}else{
						this.$Router.push({name:item.url})
					}
					
				}else{
					
					//#ifndef H5
					void plus.runtime.openWeb(item.url1)
					//#endif	
					
					//#ifdef H5
						window.location.href=item.url1;
					//#endif
					// if(process.env.NODE_ENV === 'development'){
					
					// 	window.location.href=item.url1;
					// }else{
					// 	void plus.runtime.openWeb(item.url1)
					// }
				}
			},
			// 扫描二维码
			scanFn:function(){
				let _this = this;
				//#ifdef H5
				_this.$Router.push({
					path:'/pages/main/scanpayment',
				})
				//#endif
				
				//#ifdef APP-PLUS
				uni.scanCode({
					scanType:['qrCode'],
					success:function(res){
						if(res.result){
							_this.$Router.push({
								path:'/pages/main/scanpayment',
								query:{
									payname:res.result
								}
							})
						}else{
							uni.showToast({
							    title: '请重新扫描有效二维码',
								mask:true,
								icon:'none',
							    duration: 2000
							});
						}
						
						
					},fail:function(){
						_this.$Router.push({
							path:'/pages/main/scanpayment',
							query:{
								payname:res.result
							}
						})
					},complete:function(){
						_this.$Router.push({
							path:'/pages/main/scanpayment',
							query:{
								payname:res.result
							}
						})
						
					}
				})
				//#endif
			}
		},
	
	}
	
</script>

<style>
.home-box1{
	padding-top: var(--status-bar-height);
	background-color:#d41c26;
}
.leicon,.riicon{
	width: 20px;
	height: 20px;
	margin: 0 10upx;
}
.riicon-box,.leicon{
	line-height: 1em;
}
.home-title{
	font-size: 20px;
	line-height: 1em;
}
.upload-box{
	/* width: 200upx; */
	padding: 20upx;
	text-align: center;
	font-size: 32upx;
}
.upload-btns{
	display: inline-block;
	margin: 0 auto;
	width: 120upx;
	background-color: #ff5500;
	color: #fff;
	padding: 10upx;
	text-align: center;
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
	line-height: 1em;
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
