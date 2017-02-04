var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    index: './index.html'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /.html$/,
        use: ['html-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, './'),
    hot: true,
    stats: 'errors-only'
  }
}
