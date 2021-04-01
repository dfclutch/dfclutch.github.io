const path = require('path');

module.exports = {
  entry: {
    app: './src/app.js',
    mobileCheck: './src/mobileCheck.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
      },
      {
        test: /\.(s*)css$/,
        use:['style-loader','css-loader','sass-loader']
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  }
};