const { name } = require('./package');
module.exports = {
  devServer: {
    port: 8001,    //启动端口
    open: true,     //编译完成后自动打开浏览器
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};