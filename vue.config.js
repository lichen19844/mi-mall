module.exports = {
  // 开发
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': { // 请求到含有api的路径（实际/api是自定义的虚拟路径，写成什么都可以。）
        target: 'http://mall-pre.springboot.cn',  //目标接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: { // 进行路径替换
          // '^/api': '/static/mock' // 重写接口，一旦请求的地址是以api开头的，就将其替换成目标接口域名的static/mock路径
          '^/api': '' // 因为实际接口中没有api字样，将api字符置空
        }
      }
    }
  },
  publicPath: '/app',
  outputDir: 'dest',
  indexPath: 'index2.html'
}