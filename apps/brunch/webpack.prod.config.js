const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  stats: 'errors-warnings',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname),
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}