const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ESLintPlugin = require("eslint-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.ts",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  plugins: [
    // new ESLintPlugin({
    //   extensions: "tsssss",
    //   fix: true
    // }),
    new HtmlWebpackPlugin({
      title: "match-match-game",
    }),
    new CopyPlugin({
      patterns: [{
          from: "./public",
      }]
    })
  ],
  output: {
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/[name][ext]",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/inline",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
};