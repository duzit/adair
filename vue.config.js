const webpack = require('webpack');
const path = require('path');

module.exports = {
  // chainWebpack: config => {
  //   // config.module
  //   //   .rule('md')
  //   //   .test(/\.md$/)
  //   //   .use('text-loader')
  // },
  runtimeCompiler: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: 'text-loader'
        }
      ]
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/')
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        // 定义时不能直接定义为 ‘hello’ 需使用 JSON.stringify
        'CONFIG_ENV': JSON.stringify('hello'),
        FLAG: 'true', // true
        calc: '1+1', // 2
        'process.env': process.env,
        'npm_package_name': JSON.stringify(process.env.npm_package_name),
        hello: '"hello"',
        OBJECT: JSON.stringify({ name: 'hello' }),
        name: '"name"',
        'typeof window': '"Xmind"' // 获取的值 是 object  而不是 Xmind 会与 typeof 操作符冲突貌似
      })
    ]
  }
  // 另一种写法 定义全局变量
  // configureWebpack: config => {
  //   config.plugins.push(
  //     new webpack.DefinePlugin({
  //       'CONFIG_ENV': JSON.stringify('hello123')
  //     })
  //   )
  // }
}