<template>
	<view class=" card-list-box">
		<view class="card-list-type">
						<view class="card-list-credit " :class="{'type-select':cardtype}"  @click="typeclick(1)">
							信用卡
						</view>
						<view class="card-list-deposit":class="{'type-select':!cardtype}"  @click="typeclick(2)">
							储蓄卡
						</view>
		</view>
		<view class="card-list">
			
			    <!-- 数据列表 -->
				<view class="card-item" v-for="item in cardList">
					<view class="card-item-box1">
						<view class="card-item-img-box">
							<image class="card-item-img"  :src="item.bankLogo" mode=""></image>
						</view>
						<text>{{item.bank}} {{item.cardholder|nameFilters}}</text>
						<view class="defaule-btn" v-if="item.cardType=='SAVINGS_CARD'" @click="setDefault(item.id,item.defaultCard)">
							{{item.defaultCard |cardDefault}}
						</view>
					</view>
					<view class="card-item-box2">
						{{item.cardNo|cardFilters}}
						<uni-icons type="trash" class="trash-icon"
						 @click="deleteCardFn(item.id)" color="#ffffff"></uni-icons>
					</view>
					<view class="card-item-box3">
						<text>{{item.cardType|cardTypeFilters}}</text>
						<view @click="changecard(item.id,item.cardType)" class="card-change">
							修改信息
						</view>
					</view>
				</view>
		</view>
		<router-link class="add-card-box" to="{name:'addcredit'}" v-if="addcredit">
			<uni-icons type="plus" color="#a3a3a3" size="24"></uni-icons>
			<text >添加信用卡</text>
		</router-link>
		<router-link class="add-card-box" to="{name:'adddeposit'}" v-else>
			<uni-icons type="plus" color="#a3a3a3" size="24"></uni-icons>
			<text >添加储蓄卡</text>
		</router-link>
		<uni-popup ref="popup"  type="center" class="popupstyle">
			<view class="popupCenter-box">{{popupMessage}}</view>
		</uni-popup>
	</view>
</template>

<script>	
export default {
	data (){
		return{
			cardtype:true, 
			addcredit:true,
			// cardlist: [], // 数据集
			creditlist:[],//信用卡
			depositlist:[],//储蓄卡
			popupMessage:'',
		}
	},
	onLoad() {
		// 刷新
		 uni.startPullDownRefresh();
	},
	computed:{
		cardList:function(){
			if(this.cardtype){
				return this.creditlist
			}else{
				return this.depositlist
			}
		}
	},
	methods:{
		// 删除卡片
		deleteCardFn:function(id){
			uni.request({
				method:'POSt',
			    url: this.$baseUrl+'/api/v1/pri/my/deleteUserCard', 
			    data: {
					id:id
			    },
			    header: {
					'token': uni.getStorageSync('token'),
					'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					if(res.data.code==0){
						this.popupMessage=res.data.data;
					}else if(res.data.code==-1){
						this.popupMessage=res.data.msg;
					}
			       this.$refs.popup.open();
			    }
			});	
		},
		// 获取信用卡
		getcredit(){
			uni.request({
				method:'GET',
			    url: this.$baseUrl+'/api/v1/pri/my/getUserCreditCard', 
			    data: {
			    },
			    header: {
					'token': uni.getStorageSync('token'),
					'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					if(res.data.code==0){
						this.creditlist=res.data.data
					}else if(res.data.code==-1){
						uni.showToast({
						    title:res.data.msg,
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
		},
		// 获取储蓄卡
		getdeposit(){
			uni.request({
				method:'GET',
			    url: this.$baseUrl+'/api/v1/pri/my/getUserSavingsCard', 
			    data: {
			    },
			    header: {
					'token': uni.getStorageSync('token'),
					'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					if(res.data.code==0){
						// 默认卡排序
						this.depositlist=res.data.data.sort(function(a,b){return b.defaultCard-a.defaultCard})
					}else if(res.data.code==-1){
						uni.showToast({
						    title:res.data.msg,
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
		},
		// 设置默认储蓄卡
		setDefault(id,ifDefault){
			if(ifDefault==0){
				uni.request({
					method:'POST',
				    url: this.$baseUrl+'/api/v1/pri/my/replaceDefaultCard', 
				    data: {
						"id":id,
						"defaultCard":1

				    },
				    header: {
						'token': uni.getStorageSync('token'),
						'Content-Type':'application/json' //自定义请求头信息
				    },
				    success: (res) => {
						if(res.data.code==0){
							this.getdeposit();
							uni.showToast({
							    title:res.data.data,
								mask:true,
								icon:'none',
							    duration: 2000
							});
							
						}else if(res.data.code==-1){
							uni.showToast({
							    title:res.data.msg,
								mask:true,
								icon:'none',
							    duration: 2000
							});
						}
				       
				    }
				});	
			}
		},
		// 修改卡
		changecard(id,type){
			if(type=="SAVINGS_CARD"){
				this.$Router.push({ name: 'changedeposit', params: { id: id }})
			}else{
				this.$Router.push({ name: 'changecredit', params: { id: id }})
			}
		},
		typeclick(n){
			if(n===1){
				this.cardtype=true;
				this.addcredit=true;
				
			}else if(n===2){
				this.cardtype=false;
				this.addcredit=false;
			}
			 uni.startPullDownRefresh();
		}, 
	},
	 // 下拉刷新数据列表
	onPullDownRefresh(){
		if(this.cardtype){
			// 刷新信用卡
			this.getcredit();
		}else {
			// 刷新储蓄卡
			this.getdeposit();
		}
	},
	filters:{
		nameFilters(name){
			if(name){
				return '*'+name.substring(1)
			}
			
		},
		cardFilters(card){
			if(card){
				return card.substring(0,4)+'****'+card.substring(12)
			}else{
				return card
			}
		},
		cardTypeFilters(cardType){
			if(cardType=='SAVINGS_CARD'){
				return '储蓄卡'
			}else{
				return '信用卡'
			}
		},
		cardDefault(cardDefault){
			if(cardDefault==1){
				return "默认卡"
			}else{
				return "设置为默认卡"
			}
		}
	}
}
</script>

<style>
	.card-list-type{
		position: fixed;
		/* top: 84upx; */
		border-top: 2upx solid #f4f8fb;
		text-align: center;
		z-index: 4;
		background-color: #FFFFFF;
	}
	.card-list-credit{
		display: inline-block;
		width: 374upx;
		line-height: 100upx;
		border-bottom:2upx solid #f4f8fb;
	}
	.card-list-deposit{
		display: inline-block;
		width: 374upx;
		line-height: 100upx;
		border-left: 2upx solid #f4f8fb;
		border-bottom:2upx solid #f4f8fb;
	}
	.type-select{
		color: #d91829;
		border-bottom:2upx solid #d91829;
	}
	.card-list{
		height: 700upx;
		padding-top: 100upx;
	}
	.card-item{
		width: 700upx;
		/* height: 220upx; */
		/* padding: 30upx; */
		border-radius: 20upx;
		background-color: #ce7611;
		margin: 20upx auto;
		color: #FFFFFF;
	}
	.card-item-img-box{
		display: inline-block;
			width: 80upx;
			height: 80upx;
			border-radius: 50%;
			background-color: #FFFFFF;
			vertical-align: middle;
			margin-right: 20upx;
	}
	.card-item-img{
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
	}
	.card-item-box1{
	
		padding: 40upx 40upx 0 40upx;
	}
	.defaule-btn{
		font-size: 20upx;
		float: right;
		padding: 2upx 10upx;
		border-radius: 8upx;
		background-color: rgba(255,255,255,0.4);
	}
	.trash-icon{
		float: right;
	}
	.card-item-box2{
		padding: 20upx 40upx 0 40upx;
	}
	.card-item-box3{
		padding: 20upx 40upx 40upx 40upx;
		position: relative;
	}
	.card-change{
		float: right;
		margin-top: 20upx;
		background-color: #FFFFFF;
		line-height: 28upx;
		border-radius: 40upx;
		color: #3B4144;
		font-size: 20upx;
		text-align: center;
		padding: 0 10upx;
	}
	.add-card-box{
		width: 750upx;
		line-height: 100upx;
		text-align: center;
		position: fixed;
		bottom: 0upx;
		background-color: #FFFFFF;
		z-index: 12;
		color: #a3a3a3;
	}
	.card-type-box{
		position: relative;
		font-size: 30upx;
		background-color: rgba(255,255,255,0.4);
		padding: 20upx 40upx;
	}
	.popupstyle{
		background-color: #FFFFFF;
		padding: 20upx 20upx;
	}
	.popupCenter-box{
		width: 400upx;
		padding: 40upx ;
		text-align: center;
		border-radius: 20upx;
	}
</style>
