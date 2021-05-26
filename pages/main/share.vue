<template>
	<view class="mycenter-box" >
		<view class="share-btn-box">
			<view class="make-haibao" @click="draw">
				制作海报
			</view>
			<view class="share-btn" @click="open">
				去分享
			</view>
		</view>
		<view class="share-info">
			移动二维码到合适位置，点击制作海报，然后去分享吧。
		</view>
		<canvas class="firstCanvas" :class="{'firstCanvas22':canvashow}" canvas-id="firstCanvas"></canvas>
		 <movable-area class="share-box" :style="{backgroundImage:backgroundimage}" style="{backgroundSize:'270upx 405upx',backgroundRepeat: 'no-repeat'}">
		    <movable-view :x="x" :y="y" class="mova-view" direction="all" @change="onChange"> 
			<tki-qrcode class="code-pic" ref="qrcode" :size="size" :unit="unit" 
			@result="resultqr" :show="show" :loadMake="loadMake" 
			:val="codeVal">
			</tki-qrcode>
			</movable-view>
		</movable-area>
		<!-- <view class="share-box">
			<view class="share-list">
				<image class="share-pic" src="../../static/img/share1.jpg" mode="" @click="open"></image>
			</view>
			<navigator url="../share1">deadsdasda</navigator>
		</view> -->
		<view class="bj-box">
			<view class="bj-list" :style="{width:bjListWidth}" style="">
				<image v-for="(item, index) in imgList" @click="selectImg(item)" :src="item.url" class="bj-item" mode=""></image>
			</view>
		</view>
		
		
		<uni-popup ref="popup" type="share">
			 <uni-popup-share title="分享到" @select="select"></uni-popup-share>
		</uni-popup>
		<uni-popup ref="popupcenter" type="center">
			<view class="popupCenter-box">
					{{popupCenterMessage}}
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupShare from '@/components/uni-popup/uni-popup-share'
	import tkiQrcode from "@/components/tki-qrcode/tki-qrcode.vue"
	export default{
		components:{
			  uniPopup,
			  uniPopupShare,
			  tkiQrcode
		},
		data() {
			return {
				code:'',//二维码
				bj:'../../static/img/share1.jpg',//海报背景
				codeVal:'',//生成二维码内容
				size:150,//二维码大小
				unit:'upx',//二维码大小单位
				show:true,//
				loadMake:true,//加载成功后自动生成二维码
			    x: 84,//二维码位置
				y: 200,
				old: {
					x: 0,
					y: 0
				},
				backgroundimage:'',//海报背景
				bjj:'',
				canvashow:false,//设置canvas的z-index，
				popupCenterMessage:'',//弹框信息
				bjListWidth:'',
				imgList:[],
				sharePic:'',
			}
		},
		onLoad(){
			this.codeVal=this.$shareUrl+'?phone='+uni.getStorageSync('userPhone')
			this.getShareList();
			// console.log(this.codeVal)
		},
		methods: {
			getShareList:function(){
				uni.request({
					method:'POSt',
				    url: this.$baseUrl+'/api/v1/pri/my/findSharingPosters', 
				    data: {
				    },
				    header: {
						'token':uni.getStorageSync('token'),
						'Content-Type':'application/json' //自定义请求头信息
				    },
				    success: (res) => {	
						// console.log(res.data.data)
						if(res.data.code==0){
						this.imgList=res.data.data
						this.getListWidth();
						this.selectImg(this.imgList[0])
						}else if(res.data.code==-1){
							uni.showToast({
							    title: res.data.msg,
								mask:true,
								icon:'none',
							    duration: 2000
							});
						}
				       
				    },
					complete(res) {
					}
				})
				},
				getListWidth:function(){
					this.backgroundimage='url('+this.imgList[0]+')'
					this.bjListWidth=this.imgList.length*220+'upx';
					
					
				},
			// 移动二维码，获取信息
			onChange: function(e) {
					this.old.x = e.detail.x
					this.old.y = e.detail.y
			},
			// 生成二维码
			getQr:function(){
				this.$refs.qrcode._makeCode()
			},
			// 获取二维码
			resultqr:function(e){
				this.code=e
			},
			// 制作分享海报
			draw:function(){
				let _this=this;
				let canStatus={};//背景信息
				let codeStatus={};//二维码信息
				var context = uni.createCanvasContext('firstCanvas');//获取canvas
				let can=uni.createSelectorQuery().select('.firstCanvas');//获取canvas节点信息
				let codeicon=uni.createSelectorQuery().select('.code-pic');//获取二维码节点信息
				codeicon.boundingClientRect(data =>{
					codeStatus=data;
					// console.log(codeStatus)
				}).exec();
				can.boundingClientRect(data =>{
					canStatus=data;
					// console.log(canStatus)
				}).exec();
				// 获取背景图
				console.log(_this.bj)
			  uni.getImageInfo({
				src: _this.bj.url ,
				success: function (image) {
					console.log(image);
					setTimeout(function(){
						// 画背景图
						context.drawImage(image.path,0,0,image.width,image.height,0,0,canStatus.width,canStatus.height)
						// 画二维码
						context.drawImage(_this.code,_this.old.x,_this.old.y,_this.size/2,_this.size/2)
						context.draw()
					},10)
					
					// 延迟保存canvas
					setTimeout(function(){
						uni.canvasToTempFilePath({
							canvasId:'firstCanvas',
							fileType:'jpg',
							success:function(res){
								console.log(res.tempFilePath);
								this.sharePic=res.tempFilePath;
								_this.canvashow=true;
								// 判断h5时长按保存
								//#ifdef H5
								_this.popupCenterMessage='长按保存并分享'
								uni.showToast({
								    title:_this.popupCenterMessage,
									mask:true,
									icon:'none',
								    duration: 2000
								});
								
								//#endif
								//#ifndef H5
								// _this.popupCenterMessage=res.tempFilePath;
								// _this.opencenter();
								uni.saveImageToPhotosAlbum({
									filePath:res.tempFilePath,
									success:function(e){
										_this.popupCenterMessage='已保存相册前去分享'	
										uni.showToast({
										    title:_this.popupCenterMessage,
											mask:true,
											icon:'none',
										    duration: 2000
										});
										}
								})
								_this.popupCenterMessage='已保前去分享'
								uni.showToast({
								    title:_this.popupCenterMessage,
									mask:true,
									icon:'none',
								    duration: 2000
								});
								//#endif
								_this.bjj=res.tempFilePath
							}
						})
					},100)
							
				},
				complete(ww) {
					
				}
			});
			},
			open:function (){
				// 打开分享页面
				// this.$refs.popup.open()
				//#ifndef H5
					 plus.share.sendWithSystem({
						 type:'image/*',
						 content:'我在使用有粒糖，您也来注册吧',
						 href:this.codeVal,
						 pictures:this.sharePic,
						 }, function(){
					        console.log('分享成功');
					    }, function(e){
					        console.log('分享失败：'+JSON.stringify(e));
					    });
				//#endif
			},
			opencenter:function (){
				this.$refs.popupcenter.open()
			},
			select:function(e){
				//#ifdef H5
				this.popupCenterMessage='请长按保存相册';
				uni.showToast({
				    title:this.popupCenterMessage,
					mask:true,
					icon:'none',
				    duration: 2000
				});
				//#endif
				//#ifndef H5
				if(e.item.name==='wx'){
					uni.share({
						provider:'weixin',//weixin|qq|sinaweibo
						type:0,
						title:'诚邀您来一起使用哦',//标题
						scene:'WXSceneSession',//聊天，WXSenceTimeline，朋友圈
						summary:'我正在使用它，很好用哦，快快加入吧',//内容摘要
						href:this.shareUrl,
						imageUrl:this.imgDownLoadUrl,
						success:function(){
							this.popupCenterMessage='已分享成功';
							this.opencenter();
						},
						fail:function(){
							this.savexc('分享失败，已保存至相册，快去分享吧');
						}	
					})
				}else if(e.item.name==='py'){
					uni.share({
						provider:'weixin',//weixin|qq|sinaweibo
						type:0,
						title:'诚邀您来一起使用哦',//标题
						scene:'WXSenceTimeline',//朋友圈
						summary:'我正在使用它，很好用哦，快快加入吧',//内容摘要
						href:this.shareUrl,
						imageUrl:this.imgDownLoadUrl,
						success:function(){
							this.popupCenterMessage='已分享成功';
							this.opencenter();
						},
						fail:function(){
							this.savexc('分享失败，已保存至相册，快去分享吧');
						}	
					})
				}else if(e.item.name==='qq'){
					uni.share({
						provider:'qq',//weixin|qq|sinaweibo
						type:2,
						title:'诚邀您来一起使用哦',//标题
						scene:'WXSenceTimeline',//朋友圈
						summary:'我正在使用它，很好用哦，快快加入吧',//内容摘要
						href:this.shareUrl,
						imageUrl:this.imgDownLoadUrl,
						success:function(){
							this.popupCenterMessage='已分享成功';
							this.opencenter();
						},
						fail:function(){
							this.savexc('分享失败，已保存至相册，快去分享吧');
						}	
					})
				}else if(e.item.name==='xc'){
					this.savexc('已保存至相册，快去分享吧')
				}		
				//#endif
			} ,
			//保存相册
			savexc:function(mess){
				uni.downloadFile({
					url:this.imgDownLoadUrl,
					success:function(e){
						uni.saveImageToPhotosAlbum({
							filePath:e.tempFilePath,
							success:function(){
								this.popupCenterMessage=mess
								this.opencenter();
							},
							fail:function(){
								this.popupCenterMessage='保存失败，请重试'
								uni.showToast({
								    title:this.popupCenterMessage,
									mask:true,
									icon:'none',
								    duration: 2000
								});
							}
						})
					},
					fali:function(){
						
					},
					
				})
			},
			selectImg:function(item){
				console.log(item)
				this.canvashow=false;
				this.backgroundimage='url('+item.url+')';
				// this.style={
				// 	backgroundImage:'url('+item.url+')',
				// 	backgroundSize:'540upx 810upx',
				// 	backgroundRepeat: 'no-repeat',
				// };
				this.bj=item;
			}
		}
	}
	
</script>

<style scoped>
.mycenter-box{
		position: relative;
	}
.share-box{
	width: 540upx;
	margin: 0 auto;
	/* margin-top: 40upx; */
	height: 810upx;
	background-size:540upx 810upx;
	background-repeat: no-repeat;
	/* background: url(../../static/img/share3.jpg); */
}
.firstCanvas{
	width: 540upx;
	height: 810upx;
	position: absolute;
	left:50%;
	transform:translateX(-50%);
	
}
.firstCanvas22{
	z-index: 20;
}
.mova-view{
	display: block;
	width: 120upx;
	height: 120upx;
	/* background-color: #2C405A; */
	}
	.share-btn-box{
		display: flex;
		justify-content: space-around;
		padding: 30upx 20upx 10upx 20upx;
		
	}
	.make-haibao,.share-btn{
		width: 200upx;
		background-color: #d91829;
		text-align: center;
		color: #FFFFFF;
		font-size: 26upx;
		line-height: 2em;
		height: 52upx;
		border-radius:52upx ;
	}
	.popupCenter-box{
		width: 400upx;
		padding: 40upx ;
		text-align: center;
		border-radius: 20upx;
	}
	.bj-box{
		/* width: 100%;*/
		padding: 20upx 40upx;
		/* height: 200upx; */
		overflow-x: auto;
	}
	.bj-list{
		width: 1400upx;
	}
	.bj-item{
		width: 200upx;
		float: left;
		height: 300upx;
		margin: 0 10upx;
	}
	.share-info{
	font-size: 20upx;
		color: #d91829;
		text-align: center;
		margin: 10upx 0 ;
	}
</style>
