import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
// import env from './env'

Vue.use(VueAxios, axios);
Vue.config.productionTip = false

// mock开关
const mock = true;
if (mock) {
  require('./mock/api')
}

axios.defaults.baseURL = '/api';
// axios.defaults.baseURL = 'https://www.fastmock.site/mock/0b3cb4ec251a5c1eb416120d61f6c2b2/mimall';
axios.defaults.timeout = 8000;

// axios.defaults.baseURL = env.baseURL

// 接口错误拦截
axios.interceptors.response.use(function(response) {
  let res = response.data
  if (res.status === 0) { // axios内部规定的status值
    return res.data
  } else if (res.status === 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg);
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
 