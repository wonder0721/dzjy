import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import Qs from 'qs'
Vue.prototype.$axios = axios

// 引入第三方字体图标 @符号表示当前工程的src目录，打包工具会自动去src下去找文件
import './assets/iconfont/iconfont.css'

//引入mock数据，关闭则注释该行
require('./mock'); 

Vue.config.productionTip = false
Vue.prototype.qs = Qs;

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
