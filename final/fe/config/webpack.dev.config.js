const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.config.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    proxy: {
      "/api": "http://localhost:3001"
    },
    port: 3000,
    compress: true,
    allowedHosts: "127.0.0.1",
    historyApiFallback: true,
  },
});
