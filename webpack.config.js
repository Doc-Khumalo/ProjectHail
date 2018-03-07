/*
    ./webpack.config.js
*/

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  entry: __dirname + '/client/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: "pre",
        loader: 'babel-loader',

      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        enforce: "pre",
        loader: 'babel-loader',

      }
    ],
  },
  plugins: [HtmlWebpackPluginConfig]
};