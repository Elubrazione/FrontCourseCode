const config = require("./webpack.config");
const path = require("path");

config.mode = "development";
config.devtool = "source-map";
config.devServer = {
  hot: true,
  port: 8080,
  static: {
    directory: path.join(__dirname, "../public"),
  },
};

module.exports = config;