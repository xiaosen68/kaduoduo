<template>
	<view class="scanpay-wary">
		<view class="scanpay-box">
			<view class="scanpay-name-box">
				<view class="scanpay-name">
					{{name}}
				</view>	
			</view>
			<view class="ercode-box">
				<tki-qrcode class="code-pic" ref="qrcode" :size="size" :unit="unit"
				@result="resultqr" :show="show" :loadMake="loadMake" 
				:val="codeVal">
				</tki-qrcode>
			</view>
			<view class="ercode-wrang">
				扫一扫，向我付款
			</view>
		</view>
	</view>
</template>

<script>
	
	import tkiQrcode from "@/components/tki-qrcode/tki-qrcode.vue"
	export default{
		components:{
			  tkiQrcode
		},
		data() {
			return {
			name:'哈哈',
			code:'',//二维码
			codeVal:'asdasd',//生成二维码内容
			size:400,//二维码大小
			unit:'upx',//二维码大小单位
			show:true,//
			loadMake:true,//加载成功后自动生成二维码
			x: 0,
			y: 0,
			paystatus:''
			}
		},
		methods: {
			resultqr:function(e){
				this.code=e
			},
			
		},
		computed:{
			
		},
		onLoad:function(){

		}
	}
	
</script>

<style scoped>
.scanpay-wary{
	height: 100vh;
	background-color: #FFAA36 ;
	/* padding-top: 80upx; */
}
.scanpay-box{
	width: 660upx;
	height: 800upx;
	margin:0 auto 0 auto;
	padding: 20upx 0;
	border-radius: 20upx;
	background-color: #FFFFFF;
}
.scanpay-name-box{
	padding-top: 60upx;
	text-align: center;
}
.scanpay-name{
	font-size: 40upx;
	/* color: #FFFFFF; */
}
.ercode-box{
	padding-top: 40upx;
	text-align: center;
}
.ercode-wrang{
	padding-top: 20upx;
	text-align: center;
	font-size: 30upx;
	/* color: #FFFFFF; */
}

</style>
