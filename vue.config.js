// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

// 配置svg-sprite-loader
// 使用export.module，因为vue-cli在nodejs环境运行
const path = require('path')
function resolve(dir){
  // __dirname 项目根目录的绝对路径
  return path.join(__dirname,'./',dir)
}
module.exports={
  // 部署到github
  publicPath :process.env.NODE_ENV === 'production' ? '/tally-book-1/' : '/',
  
  chainWebpack(config){
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId:'icon-[name]'
      })
      .end()
  }
}
