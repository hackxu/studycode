const webpack = require('webpack')

module.exports = {
  entry: {
    app: './webpack.config.js'
  },
  output: {
    path: __dirname,  
    filename:"",
    filename: "[name].js",
  },
  // output: {
  //   path
  // },

  module:{

  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.js$/,
        user: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({})
  ],
  resolve: {
    alias: {}
  }
}