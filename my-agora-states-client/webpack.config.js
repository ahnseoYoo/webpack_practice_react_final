const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin') //plugin은 import 해줘야함. loader는 안해줘도 됨

module.exports = {
  mode: 'production',
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
            test: /\.css$/,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            exclude: /node_modules/,
          },
        ]
      },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "public", "index.html")
  })]
};