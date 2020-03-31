import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 公共 js
import PubFuc from 'common/js/utils.js'
Vue.prototype.$pubFuc = PubFuc

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
