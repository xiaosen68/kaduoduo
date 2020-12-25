<template>
	<view class="myteam-box">
		<view class="myteam-list">
			<view  class="myteam-item" v-for=" item in teamList">
				<!-- <image class="v-head" src="../../static/img/vhead/V5.png" mode=""></image> -->
				<image class="v-head" :src="item.userLevel|headerfilter" mode=""></image>
				<view class="myteam-num-box">
					<view class="myteam-v-name">
						{{item.userName|namefilter}}
					</view>
					<view class="">
					{{item.userLevelName}}	
					</view>
				</view>
				<view class="my-team-phone-box">
					<view class="">
						{{item.phone|telfilter}}
					</view>
					<!-- 联合创始人提升业务合伙人 -->
					<button type="" v-if="ifgao||ifchuang&&item.userLevel=='VIP_MEMBERS'"  class="get-btn" @click="upToast(item.id)">提升</button>
					<!-- 申请提升高级合伙人 -->
					<button type="" v-if="ifchuang&&item.userLevel=='BUSINESS_PARTER'&&!item.upgradeState"  class="get-btn" @click="applyToast(item.id)">申请</button>
					<!-- 重新申请提升高级合伙人 -->
					<button type="" v-if="ifchuang&&item.userLevel=='BUSINESS_PARTER'&&item.upgradeState"  class="get-btn" @click="twoApplyToast(item.id)">重新申请</button>
					
				</view>
				<!-- <uni-icons @click="callFn(item.phone)" type="phone" size="36" color="#fe7f75" class="myteam-status"></uni-icons> -->
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data (){
		return {
			teamList:'',
			totalSize:0,
			totalPage:0,
			currenPage:1,
			size:40,
			ifgao:false,
			ifchuang:false,
			infoData:'',
		}	
	},
	onShow(){
		// 下拉刷新
		uni.startPullDownRefresh();
		this.getinfoFn();
	},
	methods:{
		getTeamList:function(){
			uni.request({
				method:'POST',
			    url: this.$baseUrl+'/api/v1/pri/my/getMySubordinate', 
			    data: {
					page:this.currenPage,
					size:this.size
			    },
			    header: {
					'token': uni.getStorageSync('token'),
					 'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					// console.log(res)
					if(res.data.code==0){
						if(res.data.data.current_page==1){
							this.teamList=res.data.data.list;
						}else{
							this.teamList=this.teamList.concat(res.data.data.list) ;
						}
						
						this.totalSize=res.data.data.total_size
						this.totalPage=res.data.data.total_page
						this.currenPage=res.data.data.current_page
						// console.log(this.teamList)
					}else{
						uni.showToast({
						    title: res.data.msg,
							icon:'none',
							mask:true,
						    duration: 2000
						});
					}
			       
			    },
				complete() {
					uni.stopPullDownRefresh();
				}
			});	
		},
		getinfoFn:function(){
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
						if(this.infoData.userLevel=='CO_FOUNDER'){
							this.ifchuang=true;
						}else if(this.infoData.userLevel=='SENIOR_PARTNER'){
							this.ifgao=true;
						}
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
		callFn:function(ph){
			uni.makePhoneCall({
			    phoneNumber: ph //仅为示例
			});
		},
		// 提升业务合伙人
		upVip:function(item){
			uni.request({
				method:'POST',
			    url: this.$baseUrl+'/api/v1/pri/my/upgradeVipMembersToBusinessParter', 
			    data: {
					upgradeUserId:item,
			    },
			    header: {
					'token': uni.getStorageSync('token'),
					// 'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					// console.log(res)
					if(res.data.code==0){
						uni.showToast({
						    title: res.data.data,
							icon:'none',
							mask:true,
						    duration: 2000
						});
						}else{
						uni.showToast({
						    title: res.data.msg,
							icon:'none',
							mask:true,
						    duration: 2000
						});
					}
			    }
			});	
		},
		// 提升业务合伙人弹框
		upToast:function(item){
			let _this=this;
			uni.showModal({
			    title: '提示',
			    content: '是否提升业务合伙人',
			    success: function (res) {
			        if (res.confirm) {
						_this.upVip(item);
			            // console.log('用户点击确定');
			        } else if (res.cancel) {
			            // console.log('用户点击取消');
			        }
			    }
			});
		},
		// 申请提升高级合伙人弹框
		applyToast:function(item){
			let _this=this;
			uni.showModal({
			    title: '提示',
			    content: '是否申请提升高级合伙人',
			    success: function (res) {
			        if (res.confirm) {
						_this.applyVip(item);
			            // console.log('用户点击确定');
			        } else if (res.cancel) {
			            // console.log('用户点击取消');
			        }
			    }
			});
		},
		// 重新申请提升高级合伙人弹框
		twoApplyToast:function(item){
			let _this=this;
			uni.showModal({
			    title: '提示',
			    content: '重新申请提升高级合伙人',
			    success: function (res) {
			        if (res.confirm) {
						_this.twoApplyVip(item);
			            // console.log('用户点击确定');
			        } else if (res.cancel) {
			            // console.log('用户点击取消');
			        }
			    }
			});
		},
		// 申请提升高级合伙人
		applyVip:function(item){
			uni.request({
				method:'POST',
			    url: this.$baseUrl+'/api/v1/pri/my/saveUpgradeMySuperiorUserLevel', 
			    data: {
					upgradeUserId:item,
			    },
			    header: {
					'token': uni.getStorageSync('token'),
					// 'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					// console.log(res)
					if(res.data.code==0){
						uni.showToast({
						    title: res.data.data,
							icon:'none',
							mask:true,
						    duration: 2000
						});
						}else{
						uni.showToast({
						    title: res.data.msg,
							icon:'none',
							mask:true,
						    duration: 2000
						});
					}
			    }
			});	
		},
		twoApplyVip:function(item){
			uni.request({
				method:'POST',
			    url: this.$baseUrl+'/api/v1/pri/my/upgradeMySuperiorUserLevel', 
			    data: {
					id:item,
			    },
			    header: {
					'token': uni.getStorageSync('token'),
					// 'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					// console.log(res)
					if(res.data.code==0){
						uni.showToast({
						    title: res.data.data,
							icon:'none',
							mask:true,
						    duration: 2000
						});
						}else{
						uni.showToast({
						    title: res.data.msg,
							icon:'none',
							mask:true,
						    duration: 2000
						});
					}
			    }
			});	
		},
	},

	// 下拉刷新
	onPullDownRefresh(){
		this.currenPage=1;
		this.getTeamList();
	},
	// 上滑加载更多
	onReachBottom(){
	
		if(this.currenPage<this.totalPage){
			this.currenPage++;
			this.getTeamList();
		}else{
			uni.showToast({
			    title: '没有更多数据',
				icon:'none',
				mask:true,
			    duration: 2000
			});
		}
	},
	filters:{
		timefilter:function(val){
			let b=val.split(' ');
			return b[0]
		},
		telfilter:function(val){
			return val.substring(0,3)+'***'+val.substring(7)
		},
		namefilter:function(val){
			if(val=='NOT_COMMITTED'){
				return '未实名'
			}else{
				return val
			}
		},
		headerfilter:function(val){
			if(val=='CO_FOUNDER'){
				return '../../static/img/vhead/V6.png';
			}else if(val=='SENIOR_PARTNER'){
				return '../../static/img/vhead/V5.png';
			}else if(val=='BUSINESS_PARTER'){
				return'../../static/img/vhead/V4.png';
			}else if(val=='VIP_MEMBERS'){
				return '../../static/img/vhead/V3.png';
			}else if(val=='MEMBERS'){
				return '../../static/img/vhead/V2.png';
			}else if(val=='ORDINARY_USERS'){
				return '../../static/img/vhead/V1.png';
			}else{
				return '../../static/img/vhead/V1.png';
			}
		}
	}
	
}
</script>

<style>
	.myteam-box{
		
	}
	.myteam-title-box{
		display: flex;
		border-top: 12upx solid #f4f8fb;
		border-bottom: 12upx solid #f4f8fb;
		justify-content: space-between;
		text-align: center;
		padding: 20upx 0;
	}
	.myteam-title{
		width: 180upx;
		/* height: 40upx; */
		font-size: 24upx;
		border-left: 2upx solid #f4f8fb;
	}
	.myteam-num{
		color: #d91829;
		}
	.myteam-item{
		padding: 12upx 40upx;
		border-bottom: 4upx solid #f4f8fb;
	}
	.v-head{
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		margin-right: 20upx;
		vertical-align: middle;
	}
	.myteam-num-box{
		display: inline-block;
		width: 180upx;
		font-size: 24upx;
		vertical-align: middle;
	}
	.my-team-phone-box{
		display: inline-block;
		width: 280upx;
		font-size: 24upx;
		vertical-align: middle;
		text-align: right;
		}
	.myteam-v-name{
		font-size: 34upx;
		font-weight: 700;
		
	}
	.myteam-status{
		position: absolute;
		right: 40upx;
		line-height: 100upx;
	}
	.myteam-jj{
		margin-left: 20upx;
	}
	.myteam-number{
		color: #d91829;
	}
	.get-btn{
		height: 50upx;
		/* width: 140upx; */
		padding:0 40upx;
		text-align: center;
		/* margin: 0 auto; */
		float: right;
		line-height: 50upx;
		font-size: 20upx;
		border-radius: 50upx 50upx;
		border: solid 2upx #a3a3a3;
		background-color: #d71518;
		color: #FFFFFF;
	}
</style>
