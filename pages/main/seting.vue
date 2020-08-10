<template>
	<view class="seting-box">
		<view class="">
			<view class="seting-item" v-if="!ifH5">
				<image src="../../static/img/gengxin.png" class="seting-item-icon" mode=""></image>
				<view class="seting-item-title">
					版本更新
				</view>
				<view class="seting-item-value">
					{{version}}
				</view>
			</view>
			<view class="seting-item" v-if="!ifH5" @click="clear">
				<image src="../../static/img/qingli.png" class="seting-item-icon" mode=""></image>
				<view class="seting-item-title">
					清理缓存
				</view>
				<view class="seting-item-value">
					{{huancun}}
				</view>
			</view>
			<navigator url="./aboutme" class="seting-item">
				<image src="../../static/img/guanyu.png" class="seting-item-icon" mode=""></image>
				<view class="seting-item-title">
					关于我们
				</view>
			
				<uni-icons type="forward" size="28" class="seting-item-value"></uni-icons>
			</navigator>
		</view>
		<button type="" class="login-btn" @click="logOut">退出</button>
	</view>
</template>

<script>
	export default{
		components:{
		},
		data() {
			return {
				huancun:'0',
				ifH5:true,
				version:'1.1.1.0'
			}
		},
		methods: {
			outfn:function(){
				// #ifdef APP-PLUS  
				plus.runtime.quit();  
				// #endif
			},
			logOut:function(){
				uni.removeStorageSync('token');
				// uni.removeStorageSync('userName');
				// uni.removeStorageSync('userPhone');
				this.$Router.push({name:'index'})
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
			if(process.env.NODE_ENV === 'development'){
				this.ifH5=true;
			}else{
				this.ifH5=false;
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
			}
			
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
</style>
