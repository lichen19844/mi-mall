module.exports = {
  // 开发
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': { // 当请求到api路径目录时，
        target: 'https://www.imooc.com',  //目标接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: { // 进行路径替换
          '^/api': '/static/mock' // 重写接口，一旦请求的地址是以api开头的，就将其替换成目标接口域名的static/mock路径
          // '^/api': ''
        }
      }
    }
  }
}