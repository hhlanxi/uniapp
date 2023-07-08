<template>
	<view>
		<view class="tab-list" v-for="(item,index) in gloorData" :key="index">
			
			<view class="tab-top">
				<image :src="item.floor_title.image_src"></image>
			</view>
			<view class="tab-bottom">
				<view class="left">
					<navigator :url="item.product_list[0].url">
						<image :src="item.product_list[0].image_src" ></image>
					</navigator>
				</view>
				<view class="right">
					<view class="container-nav" v-for="(item,index) in item.product_list" :key="index"   v-if="index !=0" >
						<navigator :url="item.url" >
							<image  :src="item.image_src" ></image>
						</navigator>
					</view>
					
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>

	export default {
		name:"tab-list",
		data() {
			return {
				gloorData:[]
			};
		},
		created() {
			this.getGloordata()
		},
		methods:{
			async getGloordata(){
			
				const {data:res} = await uni.$http.get('/api/public/v1/home/floordata')
				if(res.meta.status === 200){
					  res.message.forEach(floor => {
					    floor.product_list.forEach(prod => {
					      prod.url = '/subpkg/goods_list/goods_list?' + prod.navigator_url.split('?')[1]
					    })
					  })

					this.gloorData=res.message
					uni.$showMsg("数据请求成功!")
					
				}else{
					uni.$showMsg()
				}
			}
			}
		
	}
</script>

<style lang="scss">
.tab-list{
	overflow: hidden;
	margin-top: 20rpx;
	padding: 10rpx;
	display: flex;
	flex-flow: column;
	.tab-top{
		width: 100vw;
		height: 70rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.tab-bottom{
		display: flex;
		flex-flow: row wrap; 
		width: 100vw;
		height: 400rpx;
	
		.left{
			flex: 1;
			navigator{
				width: 100%;
				height: 100%;
			}
			image{
				width: 100%;
				height: 100%;
			}
		}
		.right{
			flex: 2;
			display: flex;
			flex-flow: row wrap; 
			.container-nav{
			width: 49%;
			height:50%;
			}
			navigator{
				width: 100%;
				height: 100%;
			}
			image{
				box-sizing: border-box;
				padding: 2rpx 10rpx;
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>