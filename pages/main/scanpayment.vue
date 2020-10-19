<template>
	<view class="scanpay-box">
		<view class="scanpay-name-box" v-if="ifh5">
			<view class="scanpay-tel">
				<input type="number" class=" input-num card-input scanpay-name" maxlength="11" 
				v-model="tel" value=""placeholder="请输入商家手机号" />
			</view>
			
		</view>
		<view class="scanpay-name-box" else>
			<view class="scanpay-name">
				{{name}}
			</view>	
			<view class="scanpay-tel">
				{{tel}}
			</view>
			
		</view>
		<view class="money-box">
			<view class="money-num-title">
				支付金额：
			</view>
			<view >
				<text class="money-icon">￥</text>
				<input type="digit" class="money-num" maxlength="7" 
				value="" @blur="changeMoney" v-model="moneyNum"/>
			</view>
		</view>
		<view class="money-box">
		<view class="kq-select">
			<text class="kq-title">信用卡：</text>
			<image class="bank-head-img" :src="credit.bankLogo"></image>
			<text class="con-bank-name">{{credit.bank}}{{credit.cardNo|showbankCard}}</text>
			<view class="loop-btn" @click="open1">
				变更<uni-icons type="loop" style="color: #3cb4f1"></uni-icons>
			</view>
		</view>
		<view type="" class="next-btn next-btn-box" @click="buyBtn">确认付款</view>
		
		</view>
		<uni-popup ref="popup1" type="bottom">
			<view class="bank-card-list">
			<view class="esc-btn">
					<uni-icons type="closeempty" class="close-btn" style="font-size: 50upx;" @click="closedia1"></uni-icons>
						选择信用卡
					<text class="add-card"@click="addcredit">添加</text>
				</view>
				<view class="bank-card-item" v-for="item in creditCardList" @click="selectCredit(item)">
					<image class="bank-item-head" :src="item.bankLogo" mode=""></image>
					<view class="bank-card-name">
						<text>{{item.bank}}</text>
						<text>\n</text>
						<text>{{item.cardNo|showCard}}</text>
					</view>
					
				</view>
				</view>
		</uni-popup>
		<uni-popup ref="popup" type="center">
			<view class="popupCenter-box">
				{{popupMessage}}
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
				scanVal:'',
				name:'',
				tel:'',
				moneyNum:'',
				paystatus:'',
				creditCardList:[],
				credit:'',
				popupMessage:'',
				ifh5:true,
				tradable:false,
			}
		},
		onLoad(option) {
			this.scanVal=this.$Route.query.payname;
			console.log(this.scanVal)
			if(this.scanVal){
				console.log(this.scanVal)
				this.ifh5=false;
				this.tel=(this.scanVal.split('?')[1]).split('&')[0].split('=')[1];
			this.name=(this.scanVal.split('?')[1]).split('&')[1].split('=')[1];
			
			}else{
				console.log(this.scanVal)
				this.ifh5=true;
				this.tel='';
				this.name='';
				// this.popupMessage="请扫描有效二维码";
				// this.$refs.popup.open();
			}
			
			this.getcredit();
		},
		methods: {
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
						console.log(res)
						if(res.data.code==0){
							if(res.data.data=="Y"){
								this.tradable=true;
							}else if(res.data.data=="N"){
								this.tradable=false;
								this.popupMessage='该信用卡不在交易日期内，请重新选择卡片';
								this.$refs.popup.open();
							}
						}else if(res.data.code==-1){
							this.popupMessage=res.data.msg;
							this.$refs.popup.open();
							this.tradable=false;
						}
				    },
					fail :()=> {
						this.popupMessage = '请稍后重试';
						this.$refs.popup.open();
					},
					complete: () => {
						uni.hideLoading()
					}
				});	
			},
			// 查询是否为商家
			selectPhoneMerch:function(phone){
				uni.request({
					method:'POST',
				    url: this.$baseUrl+'/api/v1/pri/my/selectPhoneMerch', 
				    data: {
						phone:phone
				    },
				    header: {
						'token': uni.getStorageSync('token'),
						'Content-Type':'application/json' //自定义请求头信息
				    },
				    success: (res) => {
						console.log(res)
						if(res.data.code==0){
							
							
						}else if(res.data.code==-1){
							this.popupMessage=res.data.msg;
							this.$refs.popup.open();
							
						}else{
							console.log(res)
						}
				       
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
						console.log(res)
						if(res.data.code==0){
							
							this.creditCardList=res.data.data;
							// this.credit=this.creditCardList[0];
							if(!this.creditCardList[0]){
								this.popupMessage="未绑定信用卡"
								this.$refs.popup.open();
								this.$Router.push({ name: 'myteam',})
							}else{
								this.credit=this.creditCardList[0];	
								this.getTradable();
							}
						}else if(res.data.code==-1){
							this.popupMessage=res.data.msg;
							this.$refs.popup.open();
						}else{
							console.log(res)
						}
				       
				    }
				});	
			},
			
			selectCredit:function(item){
				this.credit=item;
				this.getTradable();
				this.closedia1();
			},
			
			open1:function(){
			         this.$refs.popup1.open()
			},
			 closedia1:function(done){
				  this.$refs.popup1.close()
			},
			addcredit:function(){
				  this.$refs.popup1.close()
				// uni.navigateTo({
				// 	url:"../banking/addcredit"
				// })
				this.$Router.push({name:'addcredit'})
			},
			buyBtn:function(){
				if(this.moneyNum>=100&&this.moneyNum<50000){
					uni.showLoading({
						title:'加载中',
						mask:true
					})
					
					// 查询是否为商户
					uni.request({
						method:'POST',
					    url: this.$baseUrl+'/api/v1/pri/my/selectPhoneMerch', 
					    data: {
							phone:phone
					    },
					    header: {
							'token': uni.getStorageSync('token'),
							'Content-Type':'application/json' //自定义请求头信息
					    },
					    success: (res) => {
							console.log(res)
							if(res.data.code==0){
								// 判断是否为交易日
								if(!this.tradable){
									this.getTradable();
								}else{
									// 进行支付
									uni.request({
										method:'POST',
									    url: this.$baseUrl+'/api/v1/pri/shop/customGeneralOrder', 
									    data: {
											userId:uni.getStorageSync('userId'),
											store:this.tel,
											creditId:this.credit.id,//信用卡id
											totalTransactionPrice:this.moneyNum,
									    },
									    header: {
											'token':uni.getStorageSync('token'),
											'Content-Type':'application/json' //自定义请求头信息
									    },
									    success: (res) => {
											console.log(res.data)
											if(res.data.code==0){
												console.log(res.data)
													this.$Router.push({ name: 'scanstatus', params: { data: res.data.data}})
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
							}else if(res.data.code==-1){
								this.popupMessage=res.data.msg;
								this.$refs.popup.open();
								
							}else{
								console.log(res)
							}
					       
					    },
						complete: () => {
							uni.hideLoading()
						}
					});	
					
					
				}else if(this.moneyNum<100||this.moneyNum>50000){
						this.popupMessage='消费金额需大于100，小于50000';
						this.$refs.popup.open();
					
				}
			},
			changeMoney:function(){
				this.moneyNum= Math.floor(this.moneyNum*100)/100;
			}
		},
		filters:{
			showCard(val){
				if(val){
					return val.slice(0,4)+'**********'+val.slice(-4)
				}
			},
			showbankCard(val){
				if(val){
					return val.slice(-4)
				}
			}
		},
	}
	
</script>

<style scoped>
.popupCenter-box{
		width: 400upx;
		padding: 40upx ;
		text-align: center;
		border-radius: 20upx;
	}
.scanpay-name-box{
	padding-top: 80upx;
	text-align: center;
}
.scanpay-name{
	font-size: 40upx;
	
}
.scanpay-tel{
	font-size: 38upx;
}
.money-box{
	margin-top: 40upx;
	padding: 0 60upx;
}
.money-num-title{
	color: #A3A3A3;
}
.money-num{
	display: inline-block;
	padding-top: 30upx;
	padding-bottom: 10upx;
	line-height: 80upx;
	padding-left: 20upx;
	font-size: 38upx;
	width: 500upx;
	border-bottom: 2upx solid #A3A3A3;
}
.money-icon{
	display: inline-block;
	width: 40upx;
	font-size: 40upx;
	margin-right: 20upx;
	font-weight: 600;
	vertical-align: super;
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
	.next-btn-box{
		margin-top: 80upx;
	}

	.consume-box{
		width: 100%;
		min-height: 92vh;
		background-color: #f4f8fb;
		/* text-align: center; */
		padding-top: 30upx;
	
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
		/* padding-top: 60upx; */
	}
	.kq-select1{
		padding-top: 10upx;
		padding-bottom: 40upx;
	}
	.kq-title{
		display: inline-block;
		font-size: 24upx;
		width: 100upx;
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
	.bank-card-list{
		width: 710upx;
		/* height: 200upx; */
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
	.popupCenter-box{
		width: 600upx;
		/* height: 200upx; */
		background-color: #FFFFFF;
		border-radius: 10upx;
		padding: 20upx;
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
	.card-input{
		border-bottom: solid #A3A3A3 2upx;
		margin: 0 auto;
		width: 400upx;
	}
</style>
