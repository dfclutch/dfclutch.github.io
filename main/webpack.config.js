const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname),
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
        exclude: /node_modules/,
        use:['style-loader','css-loader','sass-loader']
      }
    ]
  }
};