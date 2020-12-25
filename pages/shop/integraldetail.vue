<template>
	<view class="integraldetail-box">
		<view class="integraldetail-item" v-for="item in integralList" @click="opendetailFn(item)">
			<view class="integral">
				{{item.change_score}}
			</view>
			<view class="integral-date">
				{{item.change_time}}
			</view>
		</view>
		
		
		<!-- 遮罩层 -->
		<view class="cover" v-if="coverShow" @click="coverClose()">
		</view>
		<view class="pay-true-box" v-if="payTrueShow" @click="coverClose()">
			<view class="popup-title">
				积分详情
			</view>
			<view class="popup-list-item">
				<view class="popup-list-title">
					变更原因
				</view>
				<view class="popup-list-datel">
					{{integraDatil.change_reason}}
				</view>
			</view>
			<view class="popup-list-item">
				<view class="popup-list-title">
					变更时间
				</view>
				<view class="popup-list-datel">
					{{integraDatil.change_time}}
				</view>
			</view>
			<view class="popup-list-item">
				<view class="popup-list-title">
					交易订单
				</view>
				<view class="popup-list-datel">
					{{integraDatil.order_no}}
				</view>
			</view>
			<view class="popup-list-item">
				<view class="popup-list-title">
					积分变更
				</view>
				<view class="popup-list-datel">
					{{integraDatil.change_score}}
				</view>
			</view>
			<view class="popup-list-item">
				<view class="popup-list-title">
					历史积分
				</view>
				<view class="popup-list-datel">
					{{integraDatil.change_before_score}}
				</view>
			</view>
			<view class="popup-list-item">
				<view class="popup-list-title">
					现有积分
				</view>
				<view class="popup-list-datel">
					{{integraDatil.change_after_score}}
				</view>
			</view>
		</view>
		
	</view>
	
	
	
</template>

<script>
	export default {
	data (){
		return{
			size:20,
			currPage:1,
			totalPage:0,
			integralList:[],
			integraDatil:'',
			popupMessage:'',
			payTrueShow:false,
			coverShow:false,
		}
	},
	onLoad() {
		uni.startPullDownRefresh();
	},
	methods:{
		coverClose:function(){
			this.payTrueShow=false;
			this.coverShow=false;
		},
		opendetailFn:function(item){
			this.integraDatil=item;
			this.payTrueShow=true;
			this.coverShow=true;
		},
		getIntegraFn:function(){
			// 初始化订单；
			uni.request({
				method:'POST',
			    url: this.$baseUrl+'/api/v1/pri/my/findScoreLogByUserId', 
			    data: {
					page:this.currPage,
					size:this.size
			    },
			    header: {
					'token':uni.getStorageSync('token'),
					'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					if(res.data.code==0){
						if(res.data.data.current_page==1){
							this.integralList=res.data.list;
						}else{
							this.integralList=this.integralList.concat(res.data.list);
						}
						this.totalPage=res.data.data.total_page;
						this.currPage=res.data.data.current_page;
						if(res.data.list.length==0){
							uni.showToast({
							    title: "没有更多数据了",
								mask:true,
								icon:'none',
							    duration: 2000
							});
						}
					}else if(res.data.code==-1){
						this.popupMessage=res.data.msg;
						uni.showToast({
						    title: this.popupMessage,
							mask:true,
							icon:'none',
						    duration: 2000
						});
					}
			       
			    },
				complete() {
					uni.stopPullDownRefresh();
				}
			});	
		}
	},
	onPullDownRefresh(){
		this.currPage=1;
		this.getIntegraFn();
	},
	onReachBottom(){
		if(this.currPage<this.totalPage){
			this.currPage++;
			this.getIntegraFn();
		}else{
			uni.showToast({
			    title:"没有更多记录了",
				mask:true,
				icon:'none',
			    duration: 2000
			});
		}
	},
}
</script>

<style scoped>
	page{
		background-color:#f4f8fb;
	}
	.cover{
	    position:absolute;left:0px;top:0px;
	    background:rgba(0, 0, 0, 0.4);
	    width:100%;  /*宽度设置为100%，这样才能使隐藏背景层覆盖原页面*/
	    height:100%;
	    filter:alpha(opacity=60);  /*设置透明度为60%*/
	    opacity:0.6;  /*非IE浏览器下设置透明度为60%*/
	    display:block; 
	    z-Index:99;  
	}
	.popup-title{
		text-align: center;
		font-size: 36upx;
		padding: 20upx 0 40upx 0;
	}
	.pay-true-box{
		position: absolute;
		left: 0;
		right: 0;
		width: 360upx;
		margin-left: auto; 
		 margin-right: auto; 
		background-color: #FFFFFF;
		border-radius: 10upx;
		padding:40upx 80upx;
		margin-top: 140upx;
		z-index: 100;
	}
.integraldetail-box{
	padding: 30upx;
}
.integraldetail-item{
	background-color: #FFFFFF;
	margin: 20upx 0;
	padding: 20upx 40upx;
	border-radius: 10upx;
}
.integral{
	display: inline-block;
	width: 200upx;
	color: #FF0000;
	font-size: 40upx;
	vertical-align: middle;
}
.integral-date{
	display: inline-block;
	font-size: 28upx;
	vertical-align: middle;
	width: 400upx;
	text-align: right;

}
.popup-list-item{
	padding: 10upx 0;
}
.popup-list-title,.popup-list-datel{
	display: inline-block;
	vertical-align: top;
	
}
.popup-list-title{
	width: 160upx;
	color: #9FA0A0;
}
.popup-list-datel{
	width: 200upx;
	word-wrap:break-word;
	text-align: right;
}
</style>
