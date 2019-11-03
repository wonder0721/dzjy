import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import Qs from 'qs'
Vue.prototype.$axios = axios

//引入mock数据，关闭则注释该行
require('./mock'); 

Vue.config.productionTip = false
Vue.prototype.qs = Qs;

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
