import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import App from './App.vue'
// import env from './env'

Vue.use(VueAxios, axios);
Vue.use(VueLazyLoad,{
  // preLoad: 1.3,
  // error:'./static/error.png',
  loading:'/imgs/loading-svg/loading-bars.svg',
  // attempt: 1
});
Vue.use(VueCookie);
Vue.use(Message)
Vue.prototype.$message = Message
Vue.config.productionTip = false

// mock开关
const mock = false;
if (mock) {
  require('./mock/api')
}

axios.defaults.baseURL = '/api';
// axios.defaults.baseURL = 'https://www.fastmock.site/mock/0b3cb4ec251a5c1eb416120d61f6c2b2/mimall';
axios.defaults.timeout = 8000;

// axios.defaults.baseURL = env.baseURL

// 接口业务错误拦截
axios.interceptors.response.use(
  // 1、业务拦截，前提是http状态码为正常
  function(response) {
    let res = response.data;
    // let path = location.hash;
    if (res.status === 0) { // axios内部规定的status值
      console.log('res.status is 0')
      return res.data
    } 
    else if (res.status === 10) {
      console.log('res.status is 10')
      // if (path !== '#/index') {
        window.location.href = '/#/login'
      // }
    } 
    else {
      // alert(res.msg);
      Message.warning(res.msg)
      // 抛出异常，拦截后续行为
      return Promise.reject(res)
    }
  },

  // 2、拦截http状态码失败的请求
  (error) => {
    let res = error.response
    // alert(res)
    Message.error(res.data.message)
    // 抛出异常，拦截后续行为
    return Promise.reject(error)
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
 