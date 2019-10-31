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
	@import "../static/scss/settings/_variable.scss";
	
	.tag {
		display: inline-block;
		color: #fff;
		vertical-align: middle;
		border-radius: $borderRadius;
		background-color: $backgroundColorPage;
	}
	
	.tag--normal {
		
	}
	
	.tag--mini {
		padding: 3rpx 7rpx 4rpx;
		font-size: 14rpx;
		line-height: 1.5;
		border-radius: ($borderRadius / 2);
		// transform: scale(.5);
	}
	
	.tag--red {
		background-color: $themeColor;
	}
</style>
