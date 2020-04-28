<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import axios from 'axios'
import jsonp from 'jsonp'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted () {
    let url = "https://www.fastmock.site/mock/0b3cb4ec251a5c1eb416120d61f6c2b2/mimall/table/list"
    // let url = "https://coding.imooc.com/static/lib/util/core.js?v=202004211935"
    // axios.get(url).then(() => {
    //   console.log(111)
    // })
    jsonp(url, (err, res) => {
      console.log(res)
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
