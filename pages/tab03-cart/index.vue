<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status_bar">  
				<view class="top_view"></view>  
			</view>  
		<!-- #endif -->
		
		<wl-header>
			<text>购物车</text>
		</wl-header>
		
		<view class="placeholder--common"></view>
		
		<view class="cart_list">
			<checkbox-group>
				<view class="cart_list_item f-s-c mt-10" v-for="(item, idx) in goodsList" :key="item.id">
					<checkbox color="#dd131a" style="transform: scale(.75);"/>
					
					<view class="cart_list_item_thumb ml-5"></view>
					
					<view class="cart_list_item_info flex-col f-b-s ml-10">
						<view class="cart_list_item_info_title">
							<view class="cart_list_item_info_title_text">
								<wl-tag color="red" type="mini">新品</wl-tag><text class="small ml-5">{{item.name}}</text>
							</view>
						</view>
						
						<view class="cart_list_item_info_good" @tap="cartGoodTapHandler()">
							<text>33ml*24听</text><wl-icon name="arrow-down" theme="dark" size="12"></wl-icon>
						</view>
						
						<view class="cart_list_item_info_check f-b-c">
							<view>
								<text class="red mini">￥</text>
								<text class="red normal">61.90</text>
								<text class="mini">/件</text>
							</view>
							<wl-count :good-id="item.id"></wl-count>
						</view>
					</view>
				</view>
			</checkbox-group>
		</view>
	
		<view class="cart_check--placeholder"></view>
		
		<view class="cart_check f-s-c">
			<label class="f-c">
				<checkbox color="#dd131a" style="transform: scale(.75);"/>
				<text>全选</text>
			</label>
			<text class="flex-full ml-10">
				合计：<text class="strong">￥35.00</text>
			</text>
			<wl-button color="red" square>结算（2）</wl-button>
		</view>
		
		<!-- 底部分享弹窗 -->
		<uni-popup ref="goodDetail" type="bottom" :custom="true">
			<scroll-view class="good_popup" scroll-y>
				<view class="good_popup_title f-s-e">
					<view class="good_popup_title_thumb"></view>
					
					<view class="good_popup_title_info flex-full ml-20">
						<view>
							<text class="small red">￥</text>
							<text class="large red strong">61.90</text>
						</view>
						
						<view class="mt-10">
							商品编号：123456768789
						</view>
					</view>
				</view>
				
				<view class="good_popup_type mt-10">
					<view class="strong">品类</view>
					
					<view class="good_popup_type_content f-s-c mt-10">
						<view class="good_popup_type_content_item active">
							<text>330ml*24听</text>
						</view>
						<view class="good_popup_type_content_item">
							<text>330ml*24听</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</uni-popup>
	</view>
</template>

<script>
	import WlHeader from '@/components/wl-header.vue';
	import WlTag from '@/components/wl-tag.vue';
	import WlCount from '@/components/wl-count.vue';
	import WlIcon from '@/components/wl-icon.vue';
	import WlButton from '@/components/wl-button.vue';
	
	import UniPopup from '../../components/uni/uni-popup.vue'
	
	export default {
		data() {
			return {
				goodsList: [
					{
						name: '【新品抢购】Redmi 8A 5000mAh大电量 大字体大音量大内存 骁龙八核处理器 AI人脸解锁 莱茵护眼全面屏 4GB+64GB 耀夜黑 游戏智能老人手机 小米 红米',
						id: '00001'
					},
					{
						name: 'Anker MFi认证 USB-C苹果PD快充数据线通用iPhone11Pro/XsMax/XR手机Type-C to Lightning充电器线闪充转接头',
						id: '00002'
					},
					{
						name: '【自营】苹果充电器头线手机插头套装快充适用iphonexs/XR/8p/6s/7plus/11pro 【提速版】12W快充头+苹果数据',
						id: '00003'
					},
					{
						name: '亿色(ESR)华为mate20pro钢化膜 mate20pro手机膜全屏覆盖 曲面无白边防摔防指纹贴膜 非水凝玻璃膜(UD)防蓝光',
						id: '00004'
					},
					{
						name: '【新品抢购】Redmi 8A 5000mAh大电量 大字体大音量大内存 骁龙八核处理器 AI人脸解锁 莱茵护眼全面屏 4GB+64GB 耀夜黑 游戏智能老人手机 小米 红米',
						id: '00005'
					},
					{
						name: '联通 中国 腾讯大王卡 电话卡手机卡 大流量卡全国手机移动卡4g上网卡 手机号号卡 大王卡【店铺爆款】19元/月·超百款腾讯应用免流量',
						id: '00006'
					},
					{
						name: '华为充电宝/移动电源 SuperCharge 22.5w 4.5V5A快充版 曜石黑 适用于华为Mate20/P30系列等手机AP09S',
						id: '00007'
					}
				],
				bottomData: [{
						text: '微信',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png',
						name: 'wx'
					},
					{
						text: '支付宝',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-8.png',
						name: 'wx'
					},
					{
						text: 'QQ',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png',
						name: 'qq'
					},
					{
						text: '新浪',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png',
						name: 'sina'
					},
					{
						text: '百度',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-7.png',
						name: 'copy'
					},
					{
						text: '其他',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-5.png',
						name: 'more'
					}
				]
			}
		},
		components: {
			WlHeader,
			WlCount,
			WlTag,
			WlIcon,
			WlButton,
			UniPopup
		},
		methods: {
			cartGoodTapHandler() {
				this.$refs.goodDetail.open()
			}
		},
		onPullDownRefresh() {
			//  取消刷新状态
			uni.stopPullDownRefresh()
		}
	}
</script>

<style lang="scss">
	@import '@/common/scss/settings/_variable.scss';
	
	.cart_list_item {
		padding: 28rpx;
		border-bottom: 1rpx solid $borderColorLight;
		background-color: #fff;
	}
				
		.cart_list_item_thumb {
			width: 170rpx;
			height: 170rpx;
			background-color: $backgroundColorPage;
		}
		
		
		.cart_list_item_info {
			height: 170rpx;
			flex: 1;
		}
		
			.cart_list_item_info_title {
				display:-webkit-box;  
				overflow: hidden;
				width: 100%;
				height: 72rpx;
				font-size: $fontSizeSmall;
				line-height: 36rpx;
				-webkit-box-orient:vertical;  
				-webkit-line-clamp:2;  
			}
			
			
			.cart_list_item_info_good {
				padding: 8rpx 20rpx;
				background-color: $backgroundColorPage;
				font-size: $fontSizeMini;
				border-radius: 40rpx;
			}
			
			
			.cart_list_item_info_check {
				width: 100%;
				font-size: $fontSize;
			}
			
	
	$cartCheckHeight: 100rpx;
	
	.cart_check {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: $cartCheckHeight;
		padding: 0 28rpx;
		border-top: 1rpx solid $borderColorLight;
		background-color: #fff;
	}
	
	.cart_check--placeholder {
		height: $cartCheckHeight;
	}
	
	
	.good_popup {
		height: 700rpx;
		padding: 50rpx;
		background-color: #fff;
	}
	
		.good_popup_title_thumb {
			width: 170rpx;
			height: 170rpx;
			border-radius: $borderRadius;
			background-color: $backgroundColorPage;
		}
		
			.good_popup_type_content_item {
				@extend  .cart_list_item_info_good;
				
				font-size: $fontSize;
				margin-right: 40rpx;
				padding: 14rpx 45rpx 16rpx;
				/* #ifdef APP-PLUS */
					padding: 14rpx 45rpx;
				/* #endif */
				border: 1rpx solid rgba(0, 0, 0, 0);
				
				&.active {
					background-color: $buttonColorRedLighter;
					border: 1rpx solid $buttonColorRed;
					color: $fontColorRed;
				}
			}
</style>
