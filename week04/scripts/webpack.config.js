const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
  // 输入
  entry: ["./src/index.ts", "./src/styles/basic.css", "./src/styles/iconfont.css"],
  // 输出
  output: {
    // 输出的文件名格式，这里采用名字+内容hash片段的方式，用于清理缓存
    filename: "scripts/[name].[contenthash:5].js",
    // 输出路径
    path: path.resolve(__dirname, "../dist"),
  },
  resolve: {
    // 支持的脚本后缀，可以让我们导入时省略
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      // 处理图片引入
      {
        test: /\.svg/,
        type: "asset/resource",
      },
      // 处理css
      {
        test: /.css$/,
        // 数组从后往前执行，先执行css-loader
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // 编译ts，会借助ts-config
      {
        test: /.ts$/,
        use: ["ts-loader"],
      },
      // 处理html中的静态资源
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // 清理插件，可以在每次编译之前清空dist目录
    new CleanWebpackPlugin(),
    // 可以将引入的样式合并输出到css文件
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash:5].css",
    }),
    // 根据模板生成html文件
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
}
