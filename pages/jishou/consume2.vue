<template>
	<view class="consume-box">
		<view class="cosume2-money-num">
			<view class="cosume2-money-df">
				寄售垫付金额
			</view>
			<text class="money-df">{{dianfuMoney}}<text style="font-size: 30upx;">(元)</text></text>
			<view class="cosume2-money-box">
				<view class="cosume2-day">
					<view >
						还款倒计时
					</view>
					<text class="cos-num">74</text>(天)
				</view>
				<view class="cosume2-money">
					<view >
						消费金额
					</view>
					<text class="cos-num">{{allGoodscj}}</text>(元)
				</view>
			</view>
		</view>
		<view class="cosume2-steps">
			<view class="cosume2-title">
				-具体时间以实际匹配为准-
			</view>
			<uni-steps :options="[{title: '今日加入',desc:'2020-02-3'}, {title: '正常还款',desc:'2020-02-3'}, {title: '延期还款',desc:'2020-02-3'}]" :active="2" ></uni-steps>
		</view>
		<view class="cosume2-back-select">
			使用该通道需要验证储蓄卡
		</view>
		<view class="back-select-box">
			<view class="back-select">
				<view class="back-select-icon">
					<text>到账储蓄卡</text>
				</view>
				<view class="select-bank-box" @click="open1()">
					<image class="back-head-box" src="../../static/img/bank/gongshang.png" mode=""></image>
					<text>{{deposit.bank}}</text>
					<uni-icons type="forward"></uni-icons>
				</view>
			</view>
		<!-- 	<view class="back-select last">
				<view class="arr-select-icon"  >
					<text>开户行省市</text>
				</view>
				<view class="select-bank-box" @click="open2()">
					<text>河南省-郑州市</text>
					<uni-icons type="forward"></uni-icons>
				</view>
			</view> -->
		</view>
		<view class="safe-box">
			<view class="safe-one">
				信息安全 
				<text class="font-gury">金融级加密体系</text>
			</view>
			<view class="safe-two">
				资金安全
				<text class="font-gury">PICC全程联保</text>
			</view>
		</view>
		<view class="next-btn-box">
			<view type="" class="next-btn" @click="buyBtn">确认购买并寄售</view>
		</view>
		<uni-popup ref="popup1" type="bottom">
			<view class="bank-card-list">
			<view class="esc-btn">
					<uni-icons type="closeempty" class="close-btn" style="font-size: 50upx;" @click="closedia1"></uni-icons>
						选择储蓄卡
					<text class="add-card" @click="adddeposit">添加</text>
				</view>
				<view class="bank-card-item" v-for="item in depositlist" @click="selectdeposit(item)">
					<image class="bank-item-head" src="../../static/img/bank/guangfa.png" mode=""></image>
					<view class="bank-card-name">
						<text>{{item.bank}}</text>
						<text>\n</text>
						<text>{{item.cardNo}}</text>
					</view>
				</view>
				</view>
		</uni-popup>
		<uni-popup ref="popup2" type="dialog">
		    <uni-popup-dialog type="info" mode="base" title="温馨提示" content="是否前去完善储蓄卡信息"  :duration="2000" :before-close="true" @close="closedia2" @confirm="confirmdia2"></uni-popup-dialog>
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
				dianfuMoney:0,
				depositlist:'',
				deposit:'',
				creditId:'',
			}
		},
		onLoad: function (option) {
			this.buyList=JSON.parse(this.$Route.query.buyList);
			this.allGoodsjs=this.$Route.query.allGoodsjs;
			this.allGoodscj=this.$Route.query.allGoodscj;
			this.creditId=this.$Route.query.credit;
			this.getdeposit();
		},
		methods: {
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
						console.log(res)
						if(res.data.code==0){
							// 默认卡排序
							this.depositlist=res.data.data.sort(function(a,b){return b.defaultCard-a.defaultCard})
							this.deposit=this.depositlist[0];
							console.log(this.depositlist)
						}else if(res.data.code==-1){
							this.popupMessage=res.data.msg;
							// this.$refs.popup.open();
						}else{
							console.log(res)
						}
				       
				    }
				});	
			},
			selectdeposit:function(item){
				this.deposit=item;
					this.$refs.popup1.close();
			},
			 open1:function(){
			         this.$refs.popup1.open()
			}, 
			open2:function(){
			         this.$refs.popup2.open()
			},
			closedia1:function(done){
				  this.$refs.popup1.close()
			},
			closedia2:function(done){
				done();
			},
			// 修改储蓄卡信息
			confirmdia2:function(done){
				// uni.navigateTo({
				// 	url:"../banking/changedeposit?depositStatus="+encodeURIComponent(JSON.stringify())
				// });
				this.$Router.push({path:'/pages/banking/changedeposit',
				query:{
					depositStatus:''
				}})
				done()
			},
			buyBtn:function(){
				// uni.navigateTo({
				// 	url:'../states/state?message='+'成功&type=waiting'
				// })
				// 会员Plus支付接口
				uni.request({
					method:'POST',
				    url: this.$baseUrl+'/api/v1/pri/shop/mailingOrder', 
				    data: {
						orderType:"MEMBER_PLUS",
						totalTransactionPrice:this.allGoodscj,
						totalMailingPrice:this.allGoodsjs,
						creditId:this.creditId,
						savingsId:this.deposit.id,
						passageWayId:1,
						productList:this.buyList
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
							console.log(this.credit)
						}else if(res.data.code==-1){
							this.popupMessage=res.data.msg;
						}else{
						}
				       
				    }
				});					
				// this.$Router.push({path:'/pages/states/state',
				// query:{
				// 	message:'成功',
				// 	type:'waiting'
				// }})
			},
			adddeposit:function(){
				
				// uni.navigateTo({
				// 	url:"../banking/adddeposit"
				// })
				this.$Router.push({name:'adddeposit'})
				this.$refs.popup1.close();
			}
		},
		computed:{
			
			
		}
	};
	
</script>

<style>
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
	.consume-box{
		width: 100%;
		min-height: 92vh;
		background-color: #f4f8fb;
		/* text-align: center; */
		padding-top: 20upx;
	
	}
	
	.cosume2-money-num{
		width: 750upx;
		height: 300upx;
		background-color: #FFFFFF;
		text-align: center;
		padding-top: 30upx;
	}
.cosume2-money-df{
	font-size: 30upx;
	line-height: 60upx;
	/* color: ; */
}
.money-df{
	font-size: 72upx;
}
.cosume2-money-box{
	width: 700upx;
	margin: 40upx auto;
	font-size: 24upx;
	color: a3a3a3;
}
.cosume2-day{
	display: inline-block;
	width: 190upx;
	text-align: center;
	padding: 0 80upx;
}
.cosume2-money{
	display: inline-block;
	width: 190upx;
	text-align: center;
	padding: 0 76upx;
	border-left: solid 2upx #e4e1e1;
}
.cos-num{
	font-size: 36upx;
	color: #333333;
}
.cosume2-steps{
	width: 750upx;
	height: 220upx;
	margin-top: 20upx;
	font-size: 34upx;
	background-color: #FFFFFF;
}
.cosume2-title{
	color: #e3e3e3;
	text-align: center;
	line-height: 100upx;
	font-size: 30upx;
}
.cosume2-back-select{
	width: 720upx;
	height: 72upx;
	padding-left: 30upx;
	line-height: 72upx;
	font-size: 30upx;
	color: #a3a3a3;
}
.back-select-box{
	width: 710upx;
	/* height: 200upx; */
	padding: 20upx;
	font-size: 32upx;
	background-color: #FFFFFF;
}
.back-select-head{
	width: 56upx;
	height: 46upx;
	margin-right: 20upx;
	vertical-align: bottom;
}
.back-select-icon{
	width: 220upx;
	height: 80upx;
	line-height: 80upx;
	display: inline-block;
	background : url(../../static/img/yinhangka.png) no-repeat;
	background-size: 90upx 80upx;
	padding-left: 100upx;
	
}
.arr-select-icon{
	width: 220upx;
	height: 80upx;
	line-height: 80upx;
	display: inline-block;
	background : url(../../static/img/map.png) no-repeat;
	background-size: 90upx 80upx;
	padding-left: 100upx;
}
.back-select{
	height: 92upx;
	border-bottom: 2upx solid #f5f5f5;
}
.last{
	border-bottom: none;
}
.back-head-box{
	width: 40upx;
	height: 40upx;
	vertical-align: bottom;
}
.select-bank-box{
	display: inline-block;
	width: 300upx;
	text-align: right;
}
.safe-box{
	color: #a3a3a3;
	width: 750upx;
	height: 130upx;
	background-color: #FFFFFF;
	margin-top: 20upx;
	padding-top: 20upx;
}
.safe-one{
	display: inline-block;
	width: 200upx;
	height: 100upx;
	padding-left: 156upx;
	background: url(../../static/img/safe.png) no-repeat 40upx 0upx;
}
.safe-two{
	display: inline-block;
	width: 200upx;
	height: 100upx;
	padding-left:156upx ;
	border-left: #E3E3E3 solid 2upx;
	background: url(../../static/img/zijin.png) no-repeat 40upx 0upx;
}
.font-gury{
	color: #a3a3a3;
	font-size: 24upx;
	display: block;
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
		margin-top: 40upx;
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
</style>
