export default {
	/*
	 * get请求
	 * @param {String} apiName 接口名称
	 * */
	get(apiName) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: `http://yapi.demo.qunar.com/mock/25910/${apiName}`,
				success(data) {
					resolve(data)
				},
				fail(err) {
					reject(err)
				}
			})
		})
		.catch((err) => {
			uni.showToast({
				title: err
			})
		})
	},
	
	/*
	 * 获取视窗高度
	 * */
	getWindowHeight() {
		let h = 0
		
		uni.getSystemInfo({
			success(obj) {
				h = obj.windowHeight
			}
		})
		
		return h
	},
	
	/*
	 * 显示加载弹窗
	 * @param {String} text loading提示语
	 * */
	showLoadingToast(text) {
		uni.showToast({
			title: text || "加载数据中~",
			icon: "loading",
			mask: true,
			duration: 10000000
		})
	}
}