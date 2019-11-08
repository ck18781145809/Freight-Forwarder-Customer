<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "@/common/scss/settings/reset.scss";
	@import "@/common/scss/bases/wrapper.scss";
	@import "@/common/scss/tools/tool.scss";
	
	page {
		background-color: #ebebeb;
	}
</style>
