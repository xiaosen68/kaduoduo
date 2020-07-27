<template>
	<view class=" card-list-box">
		<view class="card-list-type">
						<view class="card-list-credit " :class="{'type-select':cardtype}"  @click="typeclick(1)">
							信用卡
						</view>
						<view class="card-list-deposit":class="{'type-select':!cardtype}"  @click="typeclick(2)">
							储蓄卡
						</view>
		</view>
		<view class="card-list">
			<load-refresh
			  ref="loadRefresh"
			  :heightReduce="10"
			  :backgroundCover="'#F3F5F5'"
			  :pageNo="currPage"
			  :totalPageNo="totalPage" 
			  @loadMore="loadMore" 
			  @refresh="refresh" class="">
			  <view slot="content-list">
			    <!-- 数据列表 -->
				<view class="card-item">
					<view class="card-item-box1">
						<view class="card-item-img-box">
							<image class="card-item-img"  src="../../static/img/bank/gongshang.png" mode=""></image>
						</view>
						<text>中国银行 *森</text>
						<uni-icons type="trash" class="trash-icon" color="#ffffff"></uni-icons>
					</view>
					<view class="card-item-box2">
						213612368271368712638
					</view>
					<view class="card-box-change">
						<text>信用卡</text>
						<router-link to="{name:'addcredit'}" class="card-change">
							修改信息
						</router-link>
					</view>
				</view>
			  </view>
			</load-refresh>
		</view>
		<router-link class="add-card-box" to="{name:'addcredit'}" v-if="addcredit">
			<uni-icons type="plus" color="#a3a3a3" size="24"></uni-icons>
			<text >添加信用卡</text>
		</router-link>
		<router-link class="add-card-box" to="{name:'adddeposit'}" v-else>
			<uni-icons type="plus" color="#a3a3a3" size="24"></uni-icons>
			<text >添加储蓄卡</text>
		</router-link>
	</view>
</template>

<script>	
import loadRefresh from '@/components/load-refresh/load-refresh.vue'
export default {
  components: {
    loadRefresh
  },
	data (){
		return{
			cardtype:true, 
			list: [], // 数据集
			currPage: 1, // 当前页码
			totalPage: 1 ,// 总页数
			addcredit:true,
			changeCardUrl:''
		}
	},
	methods:{
		typeclick(n){
			if(n===1){
				this.cardtype=true;
				this.addcredit=true;
				
			}else if(n===2){
				this.cardtype=false;
				this.addcredit=false;
			}
		},
		loadMore() {
        console.log('loadMore')
        // 请求新数据完成后调用 组件内loadOver()方法
        // 注意更新当前页码 currPage
        this.$refs.loadRefresh.loadOver()
      },
      // 下拉刷新数据列表
      refresh() {
        console.log('refresh')
      }
	}
}
</script>

<style>
	.card-list-type{
		position: fixed;
		/* top: 84upx; */
		border-top: 2upx solid #f4f8fb;
		text-align: center;
		z-index: 4;
		background-color: #FFFFFF;
	}
	.card-list-credit{
		display: inline-block;
		width: 374upx;
		line-height: 100upx;
		border-bottom:2upx solid #f4f8fb;
	}
	.card-list-deposit{
		display: inline-block;
		width: 374upx;
		line-height: 100upx;
		border-left: 2upx solid #f4f8fb;
		border-bottom:2upx solid #f4f8fb;
	}
	.type-select{
		color: #d91829;
		border-bottom:2upx solid #d91829;
	}
	.card-list{
		height: 700upx;
		padding-top: 100upx;
	}
	.card-item{
		width: 640upx;
		height: 220upx;
		padding: 30upx;
		border-radius: 20upx;
		background-color: #09BB07;
		margin: 20upx auto;
		color: #FFFFFF;
	}
	.card-item-img-box{
		display: inline-block;
			width: 80upx;
			height: 80upx;
			border-radius: 50%;
			background-color: #FFFFFF;
			vertical-align: middle;
			margin-right: 20upx;
	}
	.card-item-img{
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
	}
	.card-item-box1{
		
	}
	.trash-icon{
		position: absolute;
		right: 50upx;
		top:60upx;
	}
	.card-item-box2{
		
		padding: 20upx;
	}
	.card-box-change{
		padding: 0 20upx;
		position: relative;
	}
	.card-change{
		display: inline-block;
		position: absolute;
		right: 0upx;
		top: 20upx;
		background-color: #FFFFFF;
		/* width: 200upx; */
		line-height: 28upx;
		border-radius: 40upx;
		color: #3B4144;
		font-size: 20upx;
		text-align: center;
		padding: 0 10upx;
	}
	.add-card-box{
		width: 750upx;
		line-height: 100upx;
		text-align: center;
		position: fixed;
		bottom: 0upx;
		background-color: #FFFFFF;
		z-index: 12;
		color: #a3a3a3;
	}
</style>
