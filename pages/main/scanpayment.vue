<template>
	<view class="scanpay-box">
		<view class="scanpay-name-box">
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
				<input type="digit" class="money-num" maxlength="7" value="" @blur="changeMoney" v-model="moneyNum"/>
			</view>
		</view>
		<view class="money-box">
			<view class="money-num-title">
				交易说明：
			</view>
			<view >
				<text class="money-icon"></text>
				<input type="text" class="money-num" maxlength="20" value=""  v-model="paystatus"/>
			</view>
		</view>
		<view class="next-btn-box">
			<view type="" class="next-btn" :class="{'sure-btn':sureBtn}" @click="buyBtn">确认付款</view>
		</view>
	</view>
</template>

<script>
	export default{
		components:{
		},
		data() {
			return {
			scanVal:'',
			name:'哈哈',
			tel:'00000',
			moneyNum:'',
			paystatus:''
			}
		},
		onLoad() {
			this.scanVal=this.$Route.query.pageType;
			this.scanVal='https://www.baidu.com/?phone:13071035369&userName:王森';
			this.tel=(this.scanVal.split('?')[1]).split('&')[0].split(':')[1];
			this.name=(this.scanVal.split('?')[1]).split('&')[1].split(':')[1];
		},
		methods: {
			buyBtn:function(){
				if(this.sureBtn){
					this.$Router.push({name:'scanstatus',params:{moneyNum:this.moneyNum}})
				}
			},
			changeMoney:function(){
				this.moneyNum= Math.floor(this.moneyNum*100)/100;
			}
		},
		computed:{
			sureBtn:function(){
				if(this.moneyNum>0){
					return true
				}else{
					return false
				}
			}
		},
	}
	
</script>

<style scoped>

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
.sure-btn{
	color: #FFFFFF;
	background-color: #d71518;
}
</style>
