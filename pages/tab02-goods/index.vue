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
					<view class="goods_content_list_show_item f-s-c" v-for="(item, idx) in goodsList">
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
				goodsList: [
					{
						name: '雪花（SNOW）啤酒清爽8度 纸箱装【2件包邮】330ml*24听',
						id: '00001'
					},
					{
						name: '可口可乐 330ml*24听',
						id: '00002'
					},
					{
						name: '旺仔牛奶 240ml*12听',
						id: '00003'
					}
				],
				cart: {} //  购物车信息
			}
		},
		components: {
			WlIcon,
			WlTag,
			WlCount
		},
		methods: {
			//  点击分类菜单
			goodsMenuTapHandler(idx) {
				this.goodsMenuInfoActiveIndex = idx;
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
				width: 100%;
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
