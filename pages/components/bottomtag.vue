<template>
	<view class="bottom-tag-box">
		<view class="bottom-tag-item" v-for="(item, index) in tags" @click="selecttag(index)">
			<image v-if="index===select" :src="item.icon1" mode=""  class="bottom-tag-icon"></image>
			<image v-else :src="item.icon2" mode="" class="bottom-tag-icon"></image>
			<text :class="[index===select?'bottom-tag-select':'']">{{item.content}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props:["selectitem"],
		data() {
			return{
				tags:[
					{
						content:"首页",
						icon1:'../../static/img/tag1.png',
						icon2:'../../static/img/tags1.png'
					},{
						content:"商城",
						icon1:'../../static/img/tag2.png',
						icon2:'../../static/img/tags2.png'
					},{
						content:"分享",
						icon1:'../../static/img/tag3.png',
						icon2:'../../static/img/tags3.png'
					},{
						content:"我的",
						icon1:'../../static/img/tag4.png',
						icon2:'../../static/img/tags4.png'
					}
				],
				select:1
			}
		},created(){
			this.select=this.selectitem
		},
		methods:{
			selecttag:function(index){
				this.select=index;
				// console.log(this.selectitem)
				if(index==0){
					uni.navigateTo({
						url:'../main/homepage'
					})
				}else if(index==1){
					uni.navigateTo({
						url:'../main/shop'
					})
				}else if(index==2){
					uni.navigateTo({
						url:'../main/share'
					})
				}else if(index==3){
					uni.navigateTo({
						url:'../main/mycenter'
					})
				}
			}
		}
	}
</script>

<style>
	.bottom-tag-box{
		display: flex;
		justify-content: space-around;
		width: 100%;
		height: 140upx;
		position: fixed;
		bottom: 0upx;
		line-height: 36upx;
		font-size: 28upx;
		border-top: 2upx solid #f4f8fb;
		background-color: #FFFFFF;
		z-index: 8;
	}
	.bottom-tag-item{
		width: 120upx;
		text-align: center;
		padding: 10upx 46upx;
		
	}
	.bottom-tag-icon{
		width: 68upx;
		height: 68upx;
		display: block;
		margin: 0 auto;
	}
	.bottom-tag-select{
		color: #d91829;
	}
</style>
