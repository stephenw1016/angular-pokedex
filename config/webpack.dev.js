var webpackMerge = require('webpack-merge');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

var devConfig = {
  devtool: 'cheap-module-eval-source-map',

  module: {
    rules: [
      {
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
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['raw-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  },

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8090/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
};

module.exports = webpackMerge(commonConfig, devConfig);
