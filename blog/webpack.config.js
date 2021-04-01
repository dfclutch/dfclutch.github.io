const path = require("path");

module.exports = {
  entry: {
    app: "./src/index.js",
    mobileCheck: "./src/mobileCheck.js",
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
  },
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
};
