const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

const common = require("./webpack.common.config.js");

module.exports = merge(common, {
  mode: "production",
  output: {
    publicPath: "./"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.optimize.AggressiveSplittingPlugin({
      minSize: 50000,
      maxSize: 80000,
    }),
  ],
});
