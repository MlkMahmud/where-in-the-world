const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ScriptExt = require('script-ext-html-webpack-plugin');
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");


module.exports = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'static/js/[name].[chunkhash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },

      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'public', 'index.html'),
      minify: true,
    }),

    new HtmlCriticalWebpackPlugin({
      base: path.resolve(__dirname, 'dist'),
      src: 'index.html',
      dest: 'index.html',
      inline: true,
      minify: true,
      extract: true,
      width: 375,
      height: 565,
      penthouse: {
        blockJSRequests: false,
      }
    }),

    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash].css',
    }),

    new ScriptExt({
      defaultAttribute: 'defer',
    })
  ],
};
