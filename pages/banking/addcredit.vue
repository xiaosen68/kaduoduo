<template>
	<view class=" card-box">
		<view class="card-message">
			<view class="input-box">
				<text>持卡人:</text>
				<text>{{name}}</text>
			</view>
			<view class="input-box">
				<text>信用卡号:</text>
				<input type="number" class="input-num" maxlength="16" v-model="credit" value=""placeholder="请输入信用卡卡号" />
			</view><view class="input-box">
				<text>预留手机:</text>
				<input type="number" class="input-num"  maxlength="11" v-model="tel" value=""placeholder="请输入预留手机号" />
			</view>
			<view class="input-box">
				<text>安全码:</text>
				<input type="number" class="input-num" maxlength="3" length="3" v-model="c2v2" :disabled="cvdisabled" value=""placeholder="信用卡CVN2后三位" />
			</view><view class="input-box">
				<text>有效期:</text>
				<input type="text" class="input-num" maxlength="5" v-model="ydate" @input="ifydate" value=""placeholder="信用卡有效期,如:09/22" />
			</view>
			<view class="input-box">
				<text>账单日:</text>
				<input type="number" maxlength="2" class="input-num" v-model="zdate" value=""placeholder="信用卡账单日,如:(23)"  />
	
			</view>
			<view class="input-box">
				<text>还款日:</text>
				<input type="number"  maxlength="2" class="input-num" v-model="hdate" value=""placeholder="信用卡还款日,如:(23)" />
			</view>
			<view class="input-box">
				<text>额度:</text>
				<input type="number" class="input-num" maxlength="7" v-model="ednumber" value=""placeholder="请输入信用卡额度" />
			</view>
		</view>
		<view class="btn-box">
			<view type="" class="next-btn" @click="ifcredits">确认添加</view>
		</view>
	</view>
</template>

<script>
	
	export default {
	  components: {
	  },
	data (){
		return{
			name:'',
			credit:'',
			tel:'',
			c2v2:'',
			ydate:'',
			zdate:'',
			hdate:'',
			ednumber:'',
			cvdisabled:false
		}
	},
	methods:{
		addcredit(){
			// uni.navigateBack({
			// 	delta:1
			// })
			this.$Route.back(1)
		},
		ifcredit (n){
			let p =/^\d{16}$/;
			return p.test(n)
		},
		iftel(n){
			let t =/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
			return t.test(n)
		},
		ifc2v2(n){
			let c=/^\d{3}$/;
			return c.test(n)
		},
		ifdate(n){
			if(Number(n)>31||Number(n)<=0){
				return false
			}
		},
		ifydate(e){
			if(e.detail.value.length==1){
				if(Number(e.detail.value)>1){
					this.ydate=1
				}
			}else if(e.detail.value.length==2){
				this.ydate=this.ydate+'/'
			}else if(e.detail.value.length==4){
				if(Number(e.detail.value.charAt(3))>3){
					console.log(this.ydate)
					this.ydate=this.ydate.substr (0,3);
					this.ydate=this.ydate+'3';
				}
			}else if(e.detail.value.length==5){
				if(Number(e.detail.value.charAt(3))==3){
					if(Number(e.detail.value.charAt(4))>1){
						this.ydate=this.ydate.substr (0,4);
						this.ydate=this.ydate+'1';
					}
				}
			}else if(e.detail.value.length>5){
				this.ydate=this.ydate.substr (0,5);
			}
			
		},
		ifcredits:function(){
			
		}
		
	},
	computed: {
		
	}
}
</script>

<style>
	.card-box{
		height: 94vh;
		background-color: #f4f8fb;
	}
	.card-message{
		background-color: #FFFFFF;
		padding-top: 20upx;
	}
	.input-box{
		width: 650upx;
		padding: 0 50upx;
		line-height: 100upx;
		/* margin-top: 10upx; */
		border-bottom:solid 2upx #dfd9d9;
	}
	.input-num{
		display: inline-block;
		border: none;
		line-height: 40upx;
		width: 470upx;
		padding-left: 20upx;
		font-size: 36upx;
		vertical-align: text-bottom;
		}
		.next-btn{
				height: 80upx;
				width: 600upx;
				text-align: center;
				margin: 0 auto;
				line-height: 80upx;
				border-radius: 80upx 80upx;
				border: solid 2upx #a3a3a3;
				background-color: #d71518;
				color: #FFFFFF;
			}
	.btn-box{
		margin-top: 90upx;
	}
</style>
