var HtmlWebpackPlugin = require('html-webpack-plugin');

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
     }
   ]
 },
  output: {
    path: __dirname + "/dist",
    publicPath: "http://localhost:8080/",
    filename: "[name].bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
