import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
// 导入axios
import axios from 'axios'
// 导入MD5加密
import md5 from 'js-md5'

axios.defaults.baseURL = process.env.NODE_ENV === 'production'? 'http://localhost:8081':'/api'
// axios.defaults.baseURL = '/api'
// 通过axios请求拦截器添加token，保证拥有获取数据的权限

// 以后使用this.$http.get/post.then(res => {}).catch(err => {})
Vue.prototype.$http = axios
// 以后使用this.$md5('加密内容')
Vue.prototype.$md5 = md5
// 全局定义一个eventBus传递数据（注册全局对象）
window.eventBus = new Vue()

//Echarts图标组件
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/chart/pie'
Vue.component('v-chart', ECharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
