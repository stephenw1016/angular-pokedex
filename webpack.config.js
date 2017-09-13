var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    polyfills: "./src/polyfills.ts",
    vendor: "./src/vendor.ts",
    main: "./src/main.ts"
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
   rules: [
     {
       test: /\.ts$/,
       loaders: [
         {
           loader: 'awesome-typescript-loader',
           options: { configFileName: 'tsconfig.json' }
         } ,
         'angular-router-loader',
         'angular2-template-loader'
       ]
     },
     {
       test: /\.html$/,
       loader: 'html-loader'
     },
     {
       test: /\.css$/,
       loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap' })
     },
     {
       test: /\.css$/,
       loader: 'raw-loader'
     }
   ]
 },
  output: {
    path: __dirname + "/dist",
    publicPath: "http://localhost:8090/",
    filename: "[name].bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
