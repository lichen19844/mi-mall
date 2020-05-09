<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from 'axios'
// import jsonp from 'jsonp'
// import storage from './storage/index'
export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      a: '',
      res: {}
    }
  },
  mounted () {
    // let url = "https://www.fastmock.site/mock/0b3cb4ec251a5c1eb416120d61f6c2b2/mimall/table/list"
    // let url = "https://coding.imooc.com/static/lib/util/core.js?v=202004211935"
    // axios.get(url).then(() => {
    //   console.log(111)
    // })
    // jsonp(url, (err, res) => {
    //   console.log(res)
    // })

    // this.a = storage.getItem('user')
    // this.a = storage.getItem('username', 'user')
    // this.a = storage.setItem('a', 1)
    // this.a = storage.setItem('b', 2, 'user')
    // storage.clear('a')
    // storage.clear('b', 'user')
    // console.log('b is ', window.sessionStorage.getItem('mall'))
    
    // // 本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res) => {
    //   this.res = res
    // })

    // // 通过easy-mock平台生成数据mock
    // this.axios.get('/user/login').then((res) => {
    //   this.res = res
    // })

    // 本地集成mock api生成mock数据
    this.axios.get('/user/login').then((res) => {
      this.res = res
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
