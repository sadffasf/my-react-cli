const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:path.join(__dirname,'../src/index.js'),
    mode: "development",
    devtool:'inline-source-map',
    output:{
        path:path.join(__dirname,'../dist'),
        filename:'bundle.js'
    },
    devServer: {
      static:path.join(__dirname,"../dist"),
      compress:true,//gzip压缩
      host:'0.0.0.0',//允许ip访问
      hot:true,
      historyApiFallback:true,//解决启动后刷新404问题
      port:8000,
      proxy:{
          '/api':{
              target:'https://www.baidu.com',
              pathRewrite:{
                  '^/api':''
              },
              changeOrigin:true
          }
      }
    },
    resolve: {
        alias: {
            src:path.join(__dirname,'../src')
        }
    },
    module: {
        /*src目录下面的以.js结尾的文件，要使用babel解析*/
         /*cacheDirectory是用来缓存编译结果，下次编译加速*/
        rules: [{
            test:/\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname,'../src')
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname,'../public/index.html')
        })
    ]
}
