<template>
	<view class="consume-box">
		<view class="consume-main">
			<view class="consume-money">
				<view class="">
					<image src="../../static/img/yinlian.png" mode="" class="consume-yinlain"></image>
					<text class="cm-gm">团购:￥{{allGoodscj}}</text>
					<text class="cm-gp">价格:￥{{allGoodsjs}}</text>
				</view>
				<view class="cm-feilv">
					<text class="fl">佣金比率:{{passageWay.myRate}}</text>
					<text class="sxf">手续费:<text class="line-font">3</text>元</text>
				</view>
				<view class="bank-select">
					<image class="bank-head-img" :src="credit.bank_logo"></image>
					<view class="con-bank-static">
						<text class="con-bank-name">{{credit.bank}}({{credit.card_no|showbankCard}})</text>
						<text class="con-bank-type">信用卡</text>
					</view>
					<view class="loop-btn" @click="coverOpen()">
						更换
					</view>
					<!-- <button type="" class="loop-btn"  @click="open1()">更换</button> -->
				</view>
				<button type="" class="next-btn" @click="nextFn()">下一步</button>
			</view>
		</view>
		<!-- 遮罩层 -->
		<view class="cover" v-if="coverShow" @click="coverClose()">
		</view>
		<view class="bank-card-list" v-if="bankListShow">
			<view class="esc-btn">
				<uni-icons type="closeempty" class="close-btn" style="font-size: 50upx;" @click="coverClose()"></uni-icons>
					选择信用卡
				<text class="add-card"@click="addcredit()">添加</text>
			</view>
			<view class="bank-card-item" v-for="item in creditCardList" @click="selectcredit(item)">
				<image class="bank-item-head" :src="item.bank_logo" mode=""></image>
				<view class="bank-card-name">
					<text>{{item.bank}}</text>
					<text>\n</text>
					<text>{{item.card_no|showCard}}</text>
				</view>
			</view>
		</view>
		 <uni-popup ref="popup" type="center" class="popupstyle">
		 	<view class="popupCenter-box">{{popupMessage}}</view>
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
				buyList:[],
				allGoodsjs:0,
				allGoodscj:0,
				coverif:false,
				creditCardList:[],
				credit:'',
				passageWay:'',
				tradable:false,
				popupMessage:'',
				coverShow:false,
				bankListShow:false,
				huan:'',
			}
		},
		onLoad: function (option) {
			this.buyList=JSON.parse(this.$Route.query.buyList)
			// console.log(this.buyList)
			this.allGoodsjs=this.$Route.query.allGoodsjs
			this.allGoodscj=this.$Route.query.allGoodscj;
			
			// 初始化订单；
			this.inieMeFn();
			
			
		},
		methods: {
			// 初始化订单
			inieMeFn:function(){
				uni.request({
					method:'POST',
				    url: this.$baseUrl+'/api/v1/pri/shop/initMemberPlus', 
				    data: {
						orderType:"MEMBER_PLUS",
						totalTransactionPrice:this.allGoodscj,
						totalMailingPrice:this.allGoodsjs,
						productList:this.buyList,
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
							this.passageWay=res.data.data.passageWay;
							this.getTradable();
							// console.log(this.credit)
						}else if(res.data.code==-1){
							this.popupMessage=res.data.msg;
							uni.showToast({
							    title: this.popupMessage,
								icon:'none',
								mask:true,
							    duration: 2000
							});
						}
				       
				    },
					fail :()=> {
						this.popupMessage = '请稍后重试';
						uni.showToast({
						    title: this.popupMessage,
							icon:'none',
							mask:true,
						    duration: 2000
						});
					}
				});
			},
			coverOpen:function(){
				this.coverShow=true;
				this.bankListShow=true;
			},
			coverClose:function(){
				this.coverShow=false;
				this.bankListShow=false;
			},
			nextFn:function(){	
				if(!this.tradable){
					this.getTradable();
				}else{
					this.$Router.push({path:'/pages/jishou/consume2',
							query:{
								buyList:JSON.stringify(this.buyList),
								allGoodsjs:this.allGoodsjs,
								allGoodscj:this.allGoodscj,
								credit:this.credit.id,
								myRate:this.passageWay.myRate,
								huan:this.huan,
								consumptionRate:this.passageWay.singleAdditionalHandlingCharge
							}})
				}
			},
			addcredit:function(){
				this.coverClose();
				this.$Router.push({name:'addcredit'})
			},
			selectcredit:function(item){
				this.credit=item;
				this.getTradable();
				this.coverClose();
			},
			// 查询是否可交易
			getTradable:function(){
			
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
								this.getHuanData()
							}else if(res.data.data=="N"){
								this.tradable=false;
								this.popupMessage='此卡非交易日';
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
							icon:'none',
							mask:true,
						    duration: 2000
						});
					},
					complete: () => {
						// uni.hideLoading()
					}
				});	
			},
			getHuanData:function(){
				let s= Number(new Date().getDate());
				let z=Number(this.credit.billing_date);
				let h=Number(this.credit.repayment_date);
				// 当刷卡日>账单日，账单日+30-刷卡日=出账天数
				if(s>z){
					// 当还款日>账单日，还款日-账单日=间隔时间
					if(h>z){
						this.huan=(z+30-s)+30+(h-z);
						this.huan=60+h-s;
					}else{
						// 当还款日<账单日，还款日+30-账单日=间隔时间
						this.huan=(z+30-s)+30+(h+30-z);
						this.huan=90+h-s;
					}
					// 当刷卡日<账单日，账单日-刷卡日=出账天数
				}else{
					if(h>z){
						this.huan=(z-s)+30+(h-z);
						this.huan=30+h-s;
					}else{
						this.huan=(z-s)+30+(h+30-z);
						this.huan=60+h-s;
					}
				}
				
				
				
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
				}else {
					return val
				}
			}
		}
	};
	
</script>

<style>
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
	.consume-box{
		width: 100%;
		min-height: 92vh;
		background-color: #f4f8fb;
		/* text-align: center; */
		padding-top: 30upx;
	
	}
	.line-font{
		text-decoration: line-through;
		color: #ff0000;
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
		height: 440upx;
		margin: 10upx auto;
		border-radius: 20upx;
		padding: 20upx 0;
		font-size: 32upx;
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
	.cm-gm,.cm-gp{
		
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
	.bank-select{
		width: 640upx;
		padding: 30upx 0;
		
	}
	.bank-head-img{
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		/* line-height: 100upx; */
		vertical-align: bottom;
	}
	.con-bank-static{
		display: inline-block;
		padding: 0 20upx;
		line-height: 50upx;
	}
	.con-bank-name{
		display: block;
	}
	.con-bank-type{
		color: #a3a3a3;
	}
	.loop-btn{
		display: inline-block;
		float: right;
		width: 120upx;
		text-align: left;
		font-size: 30upx;
		color: #3cb4f1;
		line-height: 100upx;
		vertical-align: bottom;
		text-align: center;
	}
	.next-btn{
		height: 80upx;
		width: 600upx;
		text-align: center;
		margin: 0 auto;
		line-height: 80upx;
		border-radius: 80upx 80upx;
		border: solid 2upx #a3a3a3;
		/* background-color: #d71518; */
		color: #333333;
	}

	.bank-card-list{
		width: 710upx;
		background-color: #FFFFFF;
		position: absolute;
		bottom: 0;
		padding: 20upx;
		z-index: 100;
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
	.popupstyle {
		background-color: #FFFFFF;
		padding: 20upx 20upx;
	}
	
	.popupCenter-box {
		width: 400upx;
		padding: 40upx;
		text-align: center;
		border-radius: 20upx;
		
	}
</style>
