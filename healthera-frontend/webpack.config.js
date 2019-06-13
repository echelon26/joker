const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  target: "web",
  entry: "./src/index.js",
  devtool: "cheap-module-source-map",

  devServer: {
    stats: "minimal",
    overlay: true,
    historyApiFallback: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false,
    disableHostCheck: true
  },

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/"
  },

  plugins: [new htmlWebpackPlugin({ template: "index.html" })],

  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: "/node_modules/", use: ["babel-loader"] },

      {
        test: /\.(css|sass)$/,
        exclude: "/node_modules",
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
