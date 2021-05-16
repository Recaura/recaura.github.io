const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './index.js'),
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  devServer: {
    port: '3000',
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};
