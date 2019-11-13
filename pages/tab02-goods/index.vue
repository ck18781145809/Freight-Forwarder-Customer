<template>
	<view class="content flex-col f-s">
		<!-- #ifdef APP-PLUS -->
			<view class="status_bar">  
				<view class="top_view"></view>  
			</view>  
		<!-- #endif -->
		
		<view class="goods_search">
			<view class="goods_search_content f-c">
				<wl-icon name="search" theme="dark" size="16"></wl-icon>
				<text class="ml-5">搜索</text>
			</view>
		</view>
		
		<view class="goods_content f-s flex-full">
			<scroll-view class="goods_content_menu">
				<view 
					class="goods_content_menu_item" 
					:class="{active: goodsMenuInfoActiveIndex === index}" 
					:keys="index"
					v-for="(item, index) in goodsMenuInfo" 
					@tap="goodsMenuTapHandler(index)"
				>
				{{item}}</view>
			</scroll-view>
			
			<view class="goods_content_list flex-full flex-col f-s">
				<view class="goods_content_list_filter f-s-c">
					<view class="goods_content_list_filter_item flex-full f-c">
						<text>排序</text>
						<wl-icon class="ml-5" name="arrow-down" size="14"></wl-icon>
					</view>
					<view class="goods_content_list_filter_item flex-full f-c">
						<text>筛选</text>
						<wl-icon class="ml-5" name="filter" size="12"></wl-icon>
					</view>
				</view>
				
				<scroll-view class="goods_content_list_show flex-full">
					<view class="goods_content_list_show_loading" :class="{show: isLoadingGoods}"></view>
					
					<view class="goods_content_list_show_item f-s-c" v-for="(item, idx) in goods">
						<view class="goods_content_list_show_item_thumb"></view>
						
						<view class="goods_content_list_show_item_info flex-col f-b-s ml-10">
							<view class="goods_content_list_show_item_info_title">
								<wl-tag color="red" type="mini" style="vertical-align: 0;">新品</wl-tag>
								<text class="ml-5">{{item.name}}</text>
							</view>
							
							<view class="goods_content_list_show_item_info_check f-b-c">
								<view>
									<text class="red mini">￥</text>
									<text class="red normal">61.90</text>
									<text class="mini">/件</text>
								</view>
								<wl-count :good-id="item.id" @change="goodChangeHandler"></wl-count>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import WlIcon from '@/components/wl-icon.vue';
	import WlTag from '@/components/wl-tag.vue';
	import WlCount from '@/components/wl-count.vue';
	
	export default {
		data() {
			return {
				//  商品菜单信息
				goodsMenuInfo: [
					'热销爆款',
					'新品上市',
					'勇闯系列',
					'纯生系列',
					'黑啤',
					'脸谱'
				],
				goodsMenuInfoActiveIndex: 1, //  当前选中菜单
				
				//  商品列表
				goods: [],
				isLoadingGoods: false, //  是否在加载数据（loading显示）
				
				cart: {} //  购物车信息
			}
		},
		components: {
			WlIcon,
			WlTag,
			WlCount
		},
		methods: {
			async reloadData() {
				this.isLoadingGoods = true
				
				const requestGoods = await this.$tools.get('getGoods')
				
				this.goods = requestGoods.data.data
				
				this.isLoadingGoods = false
			},
			//  点击分类菜单
			async goodsMenuTapHandler(idx) {
				this.goodsMenuInfoActiveIndex = idx;
				
				this.reloadData()
			},
			//  选择货物数量
			goodChangeHandler([GOOD_ID, GOOD_NUM]) {
				this.cart[GOOD_ID] = GOOD_NUM
				
				//  计算购物车总数量
				let goodsTotalNumber = Object.values(this.cart).reduce((acc, cur) => acc + cur)
				
				//  添加购物车角标
				uni.setTabBarBadge({
					index: 2,
					text: goodsTotalNumber + ''
				})
			}
		},
		onLoad() {
			this.reloadData()
		}
	}
</script>

<style lang="scss">
	@import '@/common/scss/settings/_variable.scss';
	
	page, .content {
		height: 100%;
		padding: 0;
	}
	
	
	.goods_search {
		width: 100%;
		padding: 15rpx;
		background-color: #fff;
		border-bottom: 1rpx solid $borderColorLight;
		box-sizing: border-box;
	}
	
		.goods_search_content {
			height: 65rpx;
			border-radius: $borderRadius;
			background-color: $backgroundColorPage;
		}
		
		
	.goods_content {
		width: 100%;
		height: 100%;
	}
	
		.goods_content_menu {
			width: 230rpx;
			height: 100%;
			border-right: 1rpx solid $borderColorLight;
			background-color: $backgroundColorPage;
			
			.uni-scroll-view {
				width: 230rpx;
			}
		}
		
			.goods_content_menu_item {
				line-height: 85rpx;
				color: $fontColorLight;
				text-align: center;
				border-bottom: 1rpx solid $borderColorLight;
				
				&.active {
					color: #fff;
					background-color: $themeColor;
				}
			}
		
		
		.goods_content_list {
			height: 100%;
			background-color: #fff;
		}
		
			.goods_content_list_filter {
				width: 100%;
				height: 85rpx;
				color: $fontColorLight;
				text-align: center;
				border-bottom: 1rpx solid $borderColorLight;
			}
			
			
			.goods_content_list_show {
				position: relative;
				width: 100%;
			}
			
				.goods_content_list_show_loading {
					position: absolute;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					z-index: 10;
					display: none;
					background-color: #fff;
					
					&.show {
						display: block;
					}
					
					&:after{
						position: absolute;
						top: 100rpx;
						left: 50%;
						content: '';
						width: 80rpx;
						height: 80rpx;
						margin-left: -40rpx;
						vertical-align: middle;
						background-size: 100%;
						background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=");
						-webkit-animation: uni-loading 1s steps(12) infinite;
						animation: uni-loading 1s steps(12) infinite;
					}
				}
			
				.goods_content_list_show_item {
					padding: 28rpx;
					border-bottom: 1rpx solid $borderColorLight;
				}
			
					.goods_content_list_show_item_thumb {
						width: 110rpx;
						height: 110rpx;
						background-color: $backgroundColorPage;
					}
					
					
					.goods_content_list_show_item_info {
						height: 110rpx;
						flex: 1;
					}
					
						.goods_content_list_show_item_info_title {
							display:-webkit-box; 
							overflow: hidden;
							width: 100%;
							height: 72rpx;
							font-size: $fontSizeSmall;
							line-height: 36rpx;
							-webkit-box-orient:vertical;  
							-webkit-line-clamp:2;  
						}
						
						
						.goods_content_list_show_item_info_check {
							width: 100%;
							font-size: 14px;
						}
</style>
