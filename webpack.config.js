const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const REACT_PROJECT_ENTRY_PATH = path.resolve(__dirname, "./src/index.tsx");

module.exports = {
  entry: REACT_PROJECT_ENTRY_PATH,
  output: {
    path: path.resolve(__dirname, "./.dist"),
    filename: "index_bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_module/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.svg$/,
        use: {
          loader: "@svgr/webpack",
        },
      },
      {
        test: /.(png|jpg|gif)$/,
        use: {
          loader: "file-loader",
        },
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: "file-loader",
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
