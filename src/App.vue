<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from 'axios'
// import jsonp from 'jsonp'

export default {
  name: 'App',
  components: {

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
