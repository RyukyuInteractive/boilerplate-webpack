const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ["./src/main.ts", "./src/main.scss"],
  mode: "development",
  module: {
    rules: [
      { test: /\.js$/, use: { loader: "babel-loader" } },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader", "postcss-loader", "sass-loader"]
        })
      },
      {
        test: /\.handlebars$/,
        use: ExtractTextPlugin.extract({
          use: { loader: "handlebars-loader" }
        })
      },
      { test: /\.ts$/, use: { loader: "babel-loader" } }
    ]
  },
  plugins: [new ExtractTextPlugin("styles.css")],
  resolve: { extensions: [".js", ".scss", ".sass", ".ts"] }
};
