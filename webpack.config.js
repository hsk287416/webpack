var path = require('path');

module.exports = {
  mode: 'none',
  entry: {
    'app': path.resolve(__dirname, './src/app.ts')
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: ['ts-loader']
      }
    ]
  },
  output: {
    // 文件名
    filename: '[name].js',
    // 输出路径
    path: path.join(__dirname, './dist'),
    // 静态资源引用时的路径
    publicPath: '/public'
  }
}