const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  stats: 'errors-warnings',
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
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ]
  }
}