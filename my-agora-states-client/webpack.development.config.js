const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin') //plugin은 import 해줘야함. loader는 안해줘도 됨
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: 'development',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "[name].bundle.js",
    clean: true,
  },

    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  "@babel/preset-env", ["@babel/preset-react", {"runtime": "automatic"}]
                ]
              }
            }
          },
    
          {
            test: /.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
            exclude: /node_modules/,
          },
          {
            test: /\.css$/,
            use: [{ loader: 'css-loader'}],
            exclude: /node_modules/,
          },
        ]
      },
      plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html")
      }), new MiniCssExtractPlugin()],
      optimization: {
        minimizer: [
          // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
          // `...`,
          new CssMinimizerPlugin(),
        ],
        minimize: true,
      },
};