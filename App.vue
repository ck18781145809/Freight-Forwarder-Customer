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
	@import "@/static/scss/settings/reset.scss";
	@import "@/static/scss/bases/wrapper.scss";
	@import "@/static/scss/tools/tool.scss";
	
	page {
		background-color: #ebebeb;
	}
</style>
