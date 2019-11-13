import Vue from 'vue'
import App from './App'

import Tools from '@/common/js/tools'

Vue.prototype.$tools = Tools

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
