const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const rootPath = process.cwd();
const parentPath = rootPath.split("\\").slice(0, -1).join("\\");
console.log(parentPath);
const entry = "src/index.tsx";

module.exports = {
  entry: path.resolve(rootPath, entry),
  output: {
    filename: "[name].[chunkhash:8].js",
    path: path.resolve(parentPath, "server/build"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    modules: [path.resolve(rootPath, "src"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(rootPath, "public/index.html"),
      filename: "index.html",
    }),
  ],
};