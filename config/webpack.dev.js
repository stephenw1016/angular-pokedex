var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

var devConfig = {
  devtool: 'cheap-module-eval-source-map',

  module: {
    rules: [
      // {
      //   test: /\.ts$/,
      //   loaders: [
      //     {
      //       loader: 'tslint-loader',
      //       options: {
      //         configFile: 'tslint.json',
      //         fix: true,
      //         emitErrors: true,
      //         tsConfigFile: 'tsconfig.json'
      //       }
      //     }
      //   ]
      // }
      // {
      //   test: /\.scss$/,
      //   exclude: /node_modules/,
      //   loaders: [
      //     { loader: 'raw-loader' },
      //     { loader: 'sass-loader' }
      //   ]
      // }
    ]
  },

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8090/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
};

module.exports = webpackMerge(commonConfig, devConfig);