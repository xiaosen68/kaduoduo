<template>
	<view class="consume-box">
		<view class="consume-main">
			<view class="consume-money">
				<view class="">
					<image src="../../static/img/yinlian.png" mode="" class="consume-yinlain"></image>
					<text class="cm-gm">购买金额:￥{{totalTransactionPrice}}</text>
				</view>

				<view class="kq-select">
					<text class="kq-title">支付信用卡：</text>
					<image class="bank-head-img" :src="credit.bank_logo"></image>
					<text class="con-bank-name">{{credit.bank}}{{credit.card_no|showbankCard}}</text>
					<view class="loop-btn" @click="coverOpen()">
						变更
					</view>
					
				</view>
				
				<button type="" class="next-btn" @click="coverPayTrueOpen()">下一步</button>
			</view>
		</view>
		<!-- 遮罩层 -->
		<view class="cover" v-if="coverShow" @click="coverClose()">
		</view>
		 <!-- 信用卡弹框 -->
		<view class="bank-card-list" v-if="bankListShow">
		 	<view class="esc-btn">
				<uni-icons type="closeempty" class="close-btn" style="font-size: 50upx;" @click="coverClose()"></uni-icons>
					选择信用卡
				<text class="add-card"@click="addcredit()">添加</text>
			</view>
			<view class="bank-card-item" v-for="item in creditCardList" @click="selectCredit(item)">
				<image class="bank-item-head" :src="item.bank_logo" mode=""></image>
				<view class="bank-card-name">
					<text>{{item.bank}}</text>
					<text>\n</text>
					<text>{{item.card_no|showCard}}</text>
				</view>
			</view>
		</view>
		<!-- 支付确认弹框 -->
			<view class="pay-true-box" v-if="payTrueShow">
				<view class="popup-title">
					请选择支付通道
				</view>
						<view class="popup-name">
							<image class="popup-icon" src="../../static/img/yinlian.png" mode=""></image>
							<view class=" popup-name-status">
								<view class="popup-name-title">
									{{passageWay.passageWayName}}
								</view>
								<text class="popup-warning">提示：2小时内到账(不限日期，快速到账)</text>
							</view>
						</view>
						<view class="pupou-tongdao">
							<view class="popup-td-item">
								<text>单笔限额：</text><text>100元-{{passageWay.sigleLimit}}元</text>
							</view>
							<view class="popup-td-item">
								<text>每日限额：</text><text>100元-{{passageWay.oneDayLimit}}元</text>
							</view>
							<view class="popup-td-item">
								<text>交易时间：</text><text>07:00:00-23:00:00</text>
							</view>
							<view class="popup-td-item">
								<text>佣金比率：</text><text>{{passageWay.myRate}}</text>
							</view>
							<view class="popup-td-item">
								<text>手续费用：</text>{{totalTransactionPrice*passageWay.myRate}}<text></text>
							</view>
							<view class="popup-td-item">
								<text>实际到账：</text><text>{{totalTransactionPrice*(1-passageWay.myRate)}}</text>
							</view>
						</view>
						<view class="popup-btn-box">
							<view class="popup-btn-one" @click="coverPaySeOpen()">
								更换通道
							</view>
							<view class="popup-btn-two" @click="payFn">
								确认支付
							</view>
						</view>
			</view>		
		<!-- 选择支付通道弹框 -->
			<view class="bank-card-list" v-if="paySelectShow">
			<view class="esc-btn">
					<uni-icons type="closeempty" class="close-btn" style="font-size: 50upx;" @click="coverPaySeClose()"></uni-icons>
						选择通道
				</view>
				<view class="pay-item" v-for="item in passageWayList" @click="selectPay(item)" >
					<view class="popup-name">
						<image class="popup-icon" src="../../static/img/yinlian.png" mode=""></image>
						<view class=" popup-name-status">
							<view class="popup-name-title">
								{{item.passageWayName}}
							</view>
							<text class="popup-warning">提示：2小时内到账(不限日期，快速到账)</text>
						</view>
					</view>
					<view class="pupou-tongdao">
						<view class="popup-td-item">
							<text>单笔限额：</text><text>100元-{{item.sigleLimit}}元</text>
						</view>
						<view class="popup-td-item">
							<text>每日限额：</text><text>100元-{{item.oneDayLimit}}元</text>
						</view>
						<view class="popup-td-item">
							<text>交易时间：</text><text>07:00:00-23:00:00</text>
						</view>
						<view class="popup-td-item">
							<text>佣金比率：</text><text>{{item.myRate}}</text>
						</view>
						<view class="popup-td-item">
							<text>手续费用：</text>{{totalTransactionPrice*item.myRate}}<text></text>
						</view>
						<view class="popup-td-item">
							<text>实际到账：</text><text>{{totalTransactionPrice*(item.myRate)}}</text>
						</view>
					</view>
				</view>
				</view>
		 
		 <uni-popup ref="popup" type="center">
		 	<view class="popupCenter-box">
		 		{{popupMessage}}
		 	</view>
		 </uni-popup>
	</view>
</template>

<script>	
import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	export default{
		components: {
		    uniPopup,
		    uniPopupDialog
		},
		data() {
			return {
				popupMessage:'',
				product:[],
				totalTransactionPrice:0,
				addressId:0,
				creditCardList:[],
				credit:'',
				passageWayList:[],
				passageWay:'',
				coverif:false,
				tradable:false,
				
				isClick:true,
				coverShow:false,
				bankListShow:false,
				paySelectShow:false,//支付方式选择弹框
				payTrueShow:false,//支付确认弹框
				
			}
		},
		onLoad: function () {
			this.product=JSON.parse(this.$Route.query.product)
			this.totalTransactionPrice=this.$Route.query.totalTransactionPrice
			this.addressId=this.$Route.query.addressId;
			// console.log(this.addressId)
			// 初始化订单；
			uni.request({
				method:'POST',
			    url: this.$baseUrl+'/api/v1/pri/shop/initConsumptionZone', 
			    data: {
					orderType:'CONSUMPTION_ZONE',
					totalTransactionPrice:this.totalTransactionPrice,
					addressId:this.addressId,
					product:this.product,
			    },
			    header: {
					'token':uni.getStorageSync('token'),
					'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					console.log(res)
					if(res.data.code==0){
						this.creditCardList=res.data.data.userCreditCardlist;
						this.credit=this.creditCardList[0];
						this.passageWayList=res.data.data.passageWayList;
						this.passageWay=this.passageWayList[0];
						// console.log(this.credit)
						this.getTradable();
					}else if(res.data.code==-1){
						this.popupMessage=res.data.msg;
						uni.showToast({
						    title: this.popupMessage,
							mask:true,
							icon:'none',
						    duration: 2000
						});
					}
			       
			    }
			});	
			
			
		},
		methods: {
			coverOpen:function(){
				this.coverShow=true;
				this.bankListShow=true;
			},
			coverClose:function(){
				this.coverShow=false;
				this.bankListShow=false;
				this.paySelectShow=false;
				this.payTrueShow=false;
			},
			coverPayTrueOpen:function(){
				this.coverShow=true;
				this.payTrueShow=true;
			},coverPayTrueClose:function(){
				this.coverShow=false;
				this.payTrueShow=false;
			},
			coverPaySeOpen:function(){
				this.coverShow=true;
				this.paySelectShow=true;
				this.payTrueShow=false;
			},
			coverPaySeClose:function(){
				this.coverShow=false;
				this.paySelectShow=false;
			},
			// 查询是否可交易
			getTradable:function(){
				uni.showLoading({
					title:'加载中'
				})
				uni.request({
					method:'POST',
				    url: this.$baseUrl+'/api/v1/pri/my/getTradable', 
				    data: {
						cardId:this.credit.id,
						productType:'MAILING'
				    },
				    header: {
						'token':uni.getStorageSync('token'),
						'Content-Type':'application/json' //自定义请求头信息
				    },
				    success: (res) => {
						// console.log(res)
						if(res.data.code==0){
							if(res.data.data=="Y"){
								this.tradable=true;
							}else if(res.data.data=="N"){
								this.tradable=false;
								this.popupMessage='该信用卡不在交易日期内';
								uni.showToast({
								    title: this.popupMessage,
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
							this.tradable=false;
						}
				    },
					fail :()=> {
						this.popupMessage = '请稍后重试';
						uni.showToast({
						    title: this.popupMessage,
							mask:true,
							icon:'none',
						    duration: 2000
						});
					},
					complete: () => {
						uni.hideLoading()
					}
				});	
			},
			ifClick:function(){
				setTimeout(function(){
					this.isClick=true;
				},10000)
			},
			selectPay:function(item){
				this.passageWay=item;
				this.coverPaySeClose();
				this.coverPayTrueOpen();
			},
			selectCredit:function(item){
				this.credit=item;
				this.getTradable();
				this.coverClose();
			},
			payFn:function(){
				this.coverPayTrueClose();
				if(this.isClick){
					this.isClick=false;
					this.ifClick();
				}else{
					this.popupMessage = "请稍等";
					this.$refs.popup.open();
					return false
				}
				
				
				// 判断是否为交易日
				if(!this.tradable){
					this.getTradable();
				}else{
					
					uni.showLoading({
						title:'加载中',
						mask:true
					})
					this.coverPayTrueClose();
					
					uni.request({
						method:'POST',
					    url: this.$baseUrl+'/api/v1/pri/shop/generalOrder', 
					    data: {
							orderType:'CONSUMPTION_ZONE',
							totalTransactionPrice:this.totalTransactionPrice,
							creditId:this.credit.id,
							passageWayId:this.passageWay.id,
							addressId:this.addressId,
							product:this.product
					    },
					    header: {
							'token':uni.getStorageSync('token'),
							'Content-Type':'application/json' //自定义请求头信息
					    },
					    success: (res) => {
							// console.log(res)
							if(res.data.code==0){
								this.popupMessage=res.data.data;
								this.$refs.popup.open();
							}else if(res.data.code==-1){
								this.popupMessage=res.data.msg;
								this.$refs.popup.open();
							}
					       
					    },
						complete: () => {
							uni.hideLoading()
						}
						
					});	
					}
			},
		
			
			addcredit:function(){
				 
				this.$Router.push({name:'addcredit'})
			}
		},
		filters:{
			showCard(val){
				if(val){
					return val.substring(0,4)+'****'+val.substring(val.length-4)
				}else{
					return val
				}
			},
			showbankCard(val){
				if(val){
					return val.substring(val.length-4)
				}else{
					return val
				}
			}
		}
	};
	
</script>

<style>
	.consume-box{
		width: 100%;
		min-height: 92vh;
		background-color: #f4f8fb;
		/* text-align: center; */
		padding-top: 30upx;
	
	}
	#cover{
	    position:absolute;left:0px;top:0px;
	    background:rgba(0, 0, 0, 0.4);
	    width:100%;  /*宽度设置为100%，这样才能使隐藏背景层覆盖原页面*/
	    height:100%;
	    filter:alpha(opacity=60);  /*设置透明度为60%*/
	    opacity:0.6;  /*非IE浏览器下设置透明度为60%*/
	    display:block; 
	    z-Index:99;  
	}
	.consume-main{
		background-color: #FFFFFF;
		width: 700upx;
		/* height: 440upx; */
		margin: 10upx auto;
		border-radius: 20upx;
		padding: 20upx 0;
		font-size: 32upx;
		padding-bottom:60upx;
	}
	.consume-yinlain{
		width: 80upx;
		height: 60upx;
		vertical-align: middle;
	}
	.consume-money{
		line-height: 60upx;
		width: 640upx;
		padding: 0 30upx;
	}
	.cm-gm{
		/* text-indent: 1em; */
		display: inline-block;
		width: 270upx;
		padding-left: 10upx;
	}
	.cm-gp{
		display: inline-block;
		width: 280upx;
		text-align: right;
	}
	.cm-feilv{
		color: #a3a3a3;
		font-size: 26upx;
		line-height: 76upx;
		border-bottom: 2upx solid #ebe7e7;
	}
	.fl{
		display: inline-block;
		width: 290upx;
		padding-left: 10upx;
	}
	.sxf{
		display: inline-block;
		width: 300upx;
		text-align: right;
	}
	.kq-select{
		width: 640upx;
		line-height: 60upx;
		padding-top: 60upx;
	}
	.kq-select1{
		padding-top: 10upx;
		padding-bottom: 40upx;
	}
	.kq-title{
		display: inline-block;
		font-size: 24upx;
		width: 150upx;
	}
	.bank-head-img{
		width: 40upx;
		height: 40upx;
		border-radius: 50%;
		/* line-height: 100upx; */
		vertical-align: middle;
	}
	.con-bank-static{
		display: inline-block;
		padding: 0 20upx;
		line-height: 50upx;
	}
	.con-bank-name{
		display: inline-block;
	}
	.con-bank-type{
		color: #a3a3a3;
	}
	.loop-btn{
		display: inline-block;
		width: 160upx;
		text-align: right;
		font-size: 30upx;
		color: #3cb4f1;
		/* line-height: 100upx; */
		vertical-align: middle;
	}
	.next-btn{
		height: 80upx;
		width: 600upx;
		text-align: center;
		margin: 0 auto;
		margin-top: 40upx;
		line-height: 80upx;
		border-radius: 80upx 80upx;
		border: solid 2upx #a3a3a3;
		/* background-color: #d71518; */
		color: #333333;
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
	.bank-card-list{
		width: 710upx;
		/* height: 200upx; */
		background-color: #FFFFFF;
		position: absolute;
		bottom: 0;
		padding: 20upx;
		z-index: 105;
	}
	.esc-btn{
		text-align: center;
		position: relative;
		color: #000000;
		padding-bottom: 20upx;
		border-bottom: 2upx solid #e5e5e5;
	}
	.close-btn{
		position: absolute;
		left: 20upx;
		color: #A3A3A3;
	}
	.add-card{
		position: absolute;
		right: 20upx;
		color: #A3A3A3;
		font-size: 28upx;
	}
	.bank-card-item{
		width: 750upx;
		height: 100upx;
		padding: 20upx 0;
		border-bottom: 2upx solid #e5e5e5;
	}
	.bank-item-head{
		width: 100upx;
		height: 100upx;
		vertical-align: bottom;
	}
	.bank-card-name{
		display: inline-block;
		margin-left: 30upx;
	}
	.popupCenter-box{
		width: 600upx;
		/* height: 200upx; */
		background-color: #FFFFFF;
		border-radius: 10upx;
		padding: 20upx;
		text-align: center;
	}
	.pay-true-box{
		position: absolute;
		left: 0;
		right: 0;
		width: 600upx;
		margin-left: auto; 
		 margin-right: auto; 
		background-color: #FFFFFF;
		border-radius: 10upx;
		padding: 20upx;
		z-index: 100;
	}
	.popup-title{
		text-align: center;
		font-size: 24upx;
	}
	.popup-icon{
		width: 60upx;
		height: 40upx;
	}
	.popup-warning{
		font-size: 20upx;
		color: #ff0000;
	}
	.popup-name-status{
		padding-left: 20upx;
		display: inline-block;
		font-size: 24upx;
		line-height: 1em;
	}
	.pupou-tongdao{
		width: 600upx;
		font-size: 20upx;
		vertical-align: top;
		padding: 20upx 0 20upx 0;
		/* border-bottom: #A3A3A3 solid 2upx; */
	}
	.popup-td-item{
			vertical-align: top;
		display: inline-block;
		width: 300upx;
	}
	.popup-btn-one,.popup-btn-two{
		display: inline-block;
		width: 300upx;
		text-align: center;
		font-size: 24upx;
	}
	..popup-btn-one{
		color: #A3A3A3;
	}
	.popup-btn-two{
		color: #ff0000;
	}
	.popup-btn-box{
		padding: 10upx 0;
	}
</style>
