<template>
	<view class="consume-box">
		<view class="consume-main">
			<view class="consume-money">
				<view class="">
					<image src="../../static/img/yinlian.png" mode="" class="consume-yinlain"></image>
					<text class="cm-gm">购买金额:￥{{allGoodscj}}</text>
					<text class="cm-gp">挂牌金额:￥{{allGoodsjs}}</text>
				</view>
				<view class="cm-feilv">
					<uni-icons type="help"></uni-icons>
					<text class="fl">费率:2.1%+1.00元</text>
					<text class="sxf">手续费:1元</text>
				</view>
				<view class="bank-select">
					<image class="bank-head-img" src="../../static/img/bank/gongshang.png"></image>
					<view class="con-bank-static">
						<text class="con-bank-name">工商银行(9999)</text>
						<text class="con-bank-type">信用卡</text>
					</view>
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
		onLoad: function (option) {
			this.buyList=JSON.parse(this.$Route.query.buyList)
			this.allGoodsjs=this.$Route.query.allGoodsjs
			this.allGoodscj=this.$Route.query.allGoodscj
			console.log(this.buyList)
		},
		methods: {
			 open1:function(){
			         this.$refs.popup1.open()
			},
			 closedia1:function(done){
				  this.$refs.popup1.close()
			},
			nextFn:function(){
				// uni.navigateTo({
				// 	url:'./consume2?buyList='+ encodeURIComponent(JSON.stringify(this.buyList))+'&allGoodsjs='+this.allGoodsjs+'&allGoodscj='+this.allGoodscj
				// })
				
				this.$Router.push({path:'/pages/jishou/consume2',
						query:{
							buyList:JSON.stringify(this.buyList),
							allGoodsjs:this.allGoodsjs,
							allGoodscj:this.allGoodscj
						}})
			},
			addcredit:function(){
				  this.$refs.popup1.close()
				// uni.navigateTo({
				// 	url:"../banking/addcredit"
				// })
				this.$Router.push({name:'addcredit'})
			}
		},
		computed:{
			
			
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
		width: 260upx;
		text-align: right;
		font-size: 30upx;
		color: #3cb4f1;
		line-height: 100upx;
		vertical-align: bottom;
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
</style>
