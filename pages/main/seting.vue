<template>
	<view class="seting-box">
		<view class="">
			<!-- #ifndef H5 -->
				<view class="seting-item" @click="goversion()">
					<image src="../../static/img/gengxin.png" class="seting-item-icon" mode=""></image>
					<view class="seting-item-title">
						版本更新
					</view>
					<view class="seting-item-value" >
						{{version}}
					</view>
				</view>
			
				<view class="seting-item"  @click="clear()">
					<image src="../../static/img/qingli.png" class="seting-item-icon" mode=""></image>
					<view class="seting-item-title">
						清理缓存
					</view>
					<view class="seting-item-value">
						{{huancun}}
					</view>
				</view>
			<!-- #endif -->
			
			<navigator url="./aboutme" class="seting-item">
				<image src="../../static/img/guanyu.png" class="seting-item-icon" mode=""></image>
				<view class="seting-item-title">
					关于我们
				</view>
			
				<uni-icons type="forward" size="28" class="seting-item-value"></uni-icons>
			</navigator>
		</view>
		<button type="" class="login-btn" @click="logOut">退出</button>
		<uni-popup ref="popupcenter" type="center">
			<view class="popupCenter-box">
					{{popupCenterMessage}}
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default{
		components:{
		},
		data() {
			return {
				huancun:'0',
				version:'1.1.1.0',
				newVersion:'',
				gouploadApp:false,
				verList:[],
				newVerList:[],
				popupCenterMessage:'',
			}
		},
		onShow() {
		// #ifndef H5  
		this.getVersion()	
		// #endif
		},
			
		methods: {
		
			logOut:function(){
				uni.removeStorageSync('token');
				uni.removeStorageSync('userName');
				uni.removeStorageSync('userPhone');
				this.$Router.push({name:'index'});
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
								this.gouploadApp=true;
								this.version="更新新版本";
								
							}else if(this.newVerList[0]==this.verList[0]&&this.newVerList[1]>this.verList[1]){
								this.gouploadApp=true;
								this.version="更新新版本";
							}else if(this.newVerList[0]==this.verList[0]&&this.newVerList[1]==this.verList[1]&&this.newVerList[2]>this.verList[2]){
								this.gouploadApp=true;
								this.version="更新新版本";
							}
						}else if(res.data.code==-1){
							this.popupCenterMessage='获取新版本失败'
							this.$refs.popupcenter.open()
						}
				       
				    },
					complete(res) {
					}
				});
			},
			goversion:function(){
				if(this.gouploadApp){
					this.$Router.push({name:'uploadapp'})
				}else{
					this.popupCenterMessage='已是最新版本'
					this.$refs.popupcenter.open()
				}
			},
			clear:function(){	
				//可以询问用户是否删除
			  uni.showModal({
				title:'提示',
				content:'确定清除缓存吗?',
				success(res) {
				   // 用户确定要删除
					if(res.confirm){
					   //使用plus.cache.clear 清除应用中的缓存数据 这里清除后还要二十几KB没有清除，达不到全部清除
						plus.cache.clear( function () {
							uni.showToast({
								title:'清除成功',
								icon:'none',
								success() {
									//成功后处理
								}
							})
						});	
					}
				}
			  })
			}
		},
		onLoad:function(){
			let _this=this;
			//#ifndef H5
			// 获取垃圾缓存
			plus.cache.calculate(function(n){
				if(n<1024){
					 _this.huancun=n+'B'; 
				 }  
				 else if(n/1024>=1 && n/1024/1024<1){
					  _this.huancun= Math.floor(n/1024*100)/100+'KB';
				 }
				else if(n/1024/1024>=1){
				     _this.huancun=Math.floor(n/1024/1024*100)/100+'M';
				}
			})
			
			// 获取版本号
			_this.version=plus.runtime.version;
			//#endif			
		}
	}
	
</script>

<style>
.seting-item{
	
	/* position: relative; */
	padding: 20upx 20upx;
	height: 90upx;
	line-height: 80upx;
	font-weight: 600;
	border-bottom: 2upx solid #f4f8fb;
}
.seting-item-icon{
	
	width: 80upx;
	height: 80upx;
	vertical-align: middle;
}
.seting-item-title{
	display: inline-block;
	padding-left: 40upx;
	font-size: 28upx;
	font-weight: 600;
}
.seting-item-value{
	position: absolute;
	right: 40upx;
	display: inline-block;
	font-size: 28upx;
	font-weight: 600;
	color: #A3A3A3;
}
	.login-btn{
		
		height: 80upx;
		width: 600upx;
		font-size: 28upx;
		text-align: center;
		margin: 0 auto;
		line-height: 80upx;
		border-radius: 80upx 80upx;
		background-color: #d71518;
		color: #FFFFFF;
		margin-top: 40upx;
	}
	.popupCenter-box{
		width: 400upx;
		padding: 40upx ;
		text-align: center;
		border-radius: 20upx;
	}
</style>
