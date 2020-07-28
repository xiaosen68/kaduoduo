<template>
	<view class="consume-box">
		<view class="consume-main">
			<view class="consume-money">
				<view class="">
					<image src="../../static/img/yinlian.png" mode="" class="consume-yinlain"></image>
					<text class="cm-gm">购买金额:￥{{allGoodscj}}</text>
				</view>

				<view class="kq-select">
					<text class="kq-title">支付信用卡：</text>
					<image class="bank-head-img" src="../../static/img/bank/gongshang.png"></image>
					<text class="con-bank-name">工商银行(9999)</text>
					<view class="loop-btn" @click="open1">
						变更<uni-icons type="loop" style="color: #3cb4f1"></uni-icons>
					</view>
					
				</view>
				
				<button type="" class="next-btn" @click="nextFn">下一步</button>
			</view>
		</view>
<!-- 		<view id="cover" v-if="coverif" ></view>
		<view class="bank-card-list"  v-if="coverif" >
				<view class="esc-btn">
					<uni-icons type="closeempty" class="close-btn" style="font-size: 50upx;" @click="coverif=false"></uni-icons>
						选择信用卡
					<text class="add-card">添加</text>
				</view>
				<view class="bank-card-item">
					<image class="bank-item-head" src="../../static/img/bank/guangfa.png" mode=""></image>
					<view class="bank-card-name">
						<text>广发银行</text>
						<text>\n</text>
						<text>62**** **** **** 78</text>
					</view>
				</view>
			</view>
		 -->
		 <uni-popup ref="popup1" type="bottom">
		 	<view class="bank-card-list">
		 	<view class="esc-btn">
		 			<uni-icons type="closeempty" class="close-btn" style="font-size: 50upx;" @click="closedia1"></uni-icons>
		 				选择信用卡
		 			<text class="add-card"@click="addcredit">添加</text>
		 		</view>
		 		<view class="bank-card-item">
		 			<image class="bank-item-head" src="../../static/img/bank/guangfa.png" mode=""></image>
		 			<view class="bank-card-name">
		 				<text>广发银行</text>
		 				<text>\n</text>
		 				<text>62**** **** **** 78</text>
		 			</view>
		 		</view>
		 		</view>
		 </uni-popup>
		 <uni-popup ref="popupcenter2" type="center">
		 	<view class="popupCenter-box">
		 		<view class="popup-title">
		 			请选择支付通道
		 		</view>
				<view class="popup-name">
					<image class="popup-icon" src="../../static/img/yinlian.png" mode=""></image>
					<view class=" popup-name-status">
						<view class="popup-name-title">
							快捷TFT
						</view>
						<text class="popup-warning">提示：2小时内到账(不限日期，快速到账)</text>
					</view>
				</view>
				<view class="pupou-tongdao">
					<view class="popup-td-item">
						<text>单笔限额：</text><text>10元-2万元</text>
					</view>
					<view class="popup-td-item">
						<text>每日限额：</text><text>10元-2万元</text>
					</view>
					<view class="popup-td-item">
						<text>交易时间：</text><text>07:00:00-23:00:00</text>
					</view>
					<view class="popup-td-item">
						<text>交易费率：</text><text>10元-2万元</text>
					</view>
					<view class="popup-td-item">
						<text>手续费用：</text><text>10元-2万元</text>
					</view>
					<view class="popup-td-item">
						<text>实际到账：</text><text>10元-2万元</text>
					</view>
				</view>
				<view class="popup-btn-box">
					<view class="popup-btn-one" @click="changetdFN">
						更换通道
					</view>
					<view class="popup-btn-two" @click="payFn">
						确认支付
					</view>
				</view>
		 	</view>		
		 </uni-popup>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				buyList:[],
				allGoodsjs:0,
				allGoodscj:0,
				coverif:false
			}
		},
		onLoad: function () {
			this.buyList=JSON.parse(this.$Route.query.buyList)
			this.allGoodsjs=this.$Route.query.allGoodsjs
			this.allGoodscj=this.$Route.query.allGoodscj
			console.log(this.buyList)
		},
		methods: {
			changetdFN:function(){
				this.$Router.push({name:'selectpay1'})
			},
			payFn:function(){
					this.$Router.push({name:'selectpay2'})
			},
			 open1:function(){
			         this.$refs.popup1.open()
			},
			 closedia1:function(done){
				  this.$refs.popup1.close()
			},
			nextFn:function(){
				this.$refs.popupcenter2.open();
			},
			addcredit:function(){
				  this.$refs.popup1.close()
				// uni.navigateTo({
				// 	url:"../banking/addcredit"
				// })
				this.$Router.push({name:'addcredit'})
			}
		},
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
		width: 200upx;
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
		height: 200upx;
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
</style>
