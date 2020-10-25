const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
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
      }
    ]
  }
};