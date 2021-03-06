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
    extensions: ['*', '.js', '.jsx', '.css', '.scss'],
  },
  devtool: 'source-map',
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

      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      }
    ],
  },
  plugins: [HtmlWebpackPluginConfig]
};