const { join, resolve } = require("path");

const srcPath = join(__dirname, "src");
const buildPath = join(__dirname, "_dist");
const webpack = require("webpack");

const outputPath = resolve(__dirname, `${buildPath}/assets/javascripts`);

module.exports = {
  entry: [join(__dirname, "src/assets/javascripts/main.js")],
  output: {
    path: outputPath,
    publicPath: 'assets/javascripts/',
    filename: "[name].js"
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".js"],
  },
  mode: "development",
  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["eslint-loader"],
        enforce: "pre"
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
    ]
  },
  devServer: {
    contentBase: buildPath,
    port: 8080,
    watchContentBase: true
  }
};