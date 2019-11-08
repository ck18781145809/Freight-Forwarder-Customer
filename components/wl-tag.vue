<template>
	<text class="tag" :class="'tag--' + color + ' tag--' + type"><slot></slot></text>
</template>

<script>
	export default {
		props: {
			color: {
				type: String,
				default: 'light'
			},
			type: {
				type: String,
				default: 'normal'
			}
		}
	}
</script>

<style lang="scss">
	@import "../common/scss/settings/_variable.scss";
	
	.tag {
		display: inline-block;
		color: #fff;
		vertical-align: 4rpx;
		border-radius: $borderRadius;
		background-color: $backgroundColorPage;
	}
	
	.tag--normal {
		
	}
	
	.tag--mini {
		padding: 4rpx 7rpx 4rpx;
		font-size: 14rpx;
		line-height: 1.2;
		border-radius: ($borderRadius / 2);
		/* #ifdef H5 */
			transform: scale(0.8);
		/* #endif */
	}
	
	.tag--red {
		background-color: $themeColor;
	}
</style>
