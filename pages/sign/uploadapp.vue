<template>
	<view class="uploadapp">
		<view class="upload-btn-box">
			<view class="upload-btn" @click="checkVersionToLoadUpdate()">
				Android下载
			</view>
			<view class="upload-btn" @click="copyFn">
				Android下载链接复制
			</view>
		<!-- 	<view class="upload-btn" @click="uploadIos()">
				Iphone下载
			</view> -->
		</view>
		<uni-popup ref="popup" type="center">
			<view class="popupCenter-box">
				{{popupMessage}}
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				popupMessage:'',
				apkPath:'',
			}
		},
		methods: {
			copyFn:function(dd){
				//#ifndef H5
					uni.setClipboardData({
					    data: 'http://47.96.91.58:8088/huqing/apkUrl/youlitang.apk',
					    success: function () {
							this.popupCenterMessage='复制成功,前去浏览器下载安装包'
								this.$refs.popup.open()
					    }
					});
					//#endif
					//#ifdef H5
						 this.$copyText('http://47.96.91.58:8088/huqing/apkUrl/youlitang.apk').then(
						                    res => {
						                        uni.showToast({
						                            title: '复制成功,去浏览器下载'
						                        })
						                    }
						                )
					//#endif
				},
			checkVersionToLoadUpdate:function(){
					//#ifdef H5
						 this.$copyText('http://47.96.91.58:8088/huqing/apkUrl/youlitang.apk').then(
						                    res => {
						                        uni.showToast({
						                            title: '复制成功,去浏览器下载'
						                        })
						                    }
						                )
										
										return false;
					//#endif
				
				
					//TODO 此处判断是否为 WIFI连接状态
					if(plus.networkinfo.getCurrentType()!=3){
						uni.showModal({
								title: "版本更新",
								content: '当前使用手机流量，是否立即进行新版本下载？',
								confirmText:'立即更新',
								cancelText:'稍后进行',
								success: function (res) {
									if (res.confirm) {
						//设置 最新版本apk的下载链接
						// var downloadApkUrl = this.$baseUrl+'/apkUrl/youlitang.apk';
						var downloadApkUrl ='http://47.96.91.58:8088/huqing/apkUrl/youlitang.apk'
						var dtask = plus.downloader.createDownload(downloadApkUrl,{},function ( d, status ) { 
							
							
							
							if ( status == 200 ) {  
									this.apkPath=d.filename;
									// 安装app
									plus.runtime.install(this.apkPath,{},function(WidgetInfo){
										uni.showToast({
											title: '安装成功',
											duration: 3000  
										}); 
									},function(err){
										uni.showToast({
											title: '安装失败，请点击复制地址，在浏览器中下载安装',
											duration: 3000  
										}); 
									})
									uni.showToast({
										title: this.apkPath,
										duration: 5000  
									});  
								} else {  
									 uni.showToast({  
										title: '下载失败',
										duration: 1500  
									 });  
								}    
							});  
								dtask.start();
								var prg = 0;
								var showLoading = plus.nativeUI.showWaiting("正在下载");  //创建一个showWaiting对象
								dtask.addEventListener('statechanged', function( task,status) 
								{
										  // 给下载任务设置一个监听 并根据状态  做操作
										  switch (task.state) {
											case 3:
											  prg = parseInt((parseFloat(task.downloadedSize) /parseFloat(task.totalSize)) * 100);
											  showLoading.setTitle("  正在下载" + prg + "%  ");
											  break;
											case 4:
											   plus.nativeUI.closeWaiting();
												//下载完成
											  break;
										  }
									});
						
								} else if (res.cancel) {
									// 取消更新
									uni.showToast({
											title: '更新已取消',
											duration: 1000  
									});  
								}
								}
							});
					}else{
						uni.showModal({
							title: "版本更新",
							content: '当前为Wifi连接，是否立即进行新版本下载？',
							confirmText:'立即更新',
							cancelText:'稍后进行',
							success: function (res) {
								if (res.confirm) {
					//设置 最新版本apk的下载链接
					// var downloadApkUrl = this.$baseUrl+'/apkUrl/youlitang.apk';
					var downloadApkUrl ='http://47.96.91.58:8088/huqing/apkUrl/youlitang.apk'
					var dtask = plus.downloader.createDownload(downloadApkUrl,{},function ( d, status ) { 
						
						
						
						if ( status == 200 ) {  
								this.apkPath=d.filename;
								// 安装app
								plus.runtime.install(this.apkPath,{},function(WidgetInfo){
									uni.showToast({
										title: '安装成功',
										duration: 3000  
									}); 
								},function(err){
									uni.showToast({
										title: '安装失败，请点击复制地址，在浏览器中下载安装',
										duration: 3000  
									}); 
								})
								uni.showToast({
									title: this.apkPath,
									duration: 5000  
								});  
							} else {  
								 uni.showToast({  
									title: '下载失败',
									duration: 1500  
								 });  
							}    
						});  
							dtask.start();
							var prg = 0;
							var showLoading = plus.nativeUI.showWaiting("正在下载");  //创建一个showWaiting对象
							dtask.addEventListener('statechanged', function( task,status) 
							{
									  // 给下载任务设置一个监听 并根据状态  做操作
									  switch (task.state) {
										case 3:
										  prg = parseInt((parseFloat(task.downloadedSize) /parseFloat(task.totalSize)) * 100);
										  showLoading.setTitle("  正在下载" + prg + "%  ");
										  break;
										case 4:
										   plus.nativeUI.closeWaiting();
											//下载完成
										  break;
									  }
								});
					
							} else if (res.cancel) {
								// 取消更新
								uni.showToast({
										title: '更新已取消',
										duration: 1000  
								});  
							}
							}
						});
					}
			},
			
			uploadIos:function(){
				
			}
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
	.popupCenter-box{
		width: 600upx;
		/* height: 200upx; */
		background-color: #FFFFFF;
		border-radius: 10upx;
		padding: 20upx;
	}
</style>
