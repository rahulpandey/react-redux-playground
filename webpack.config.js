const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const DIST_DIR = path.resolve(__dirname, "dist");

const SRC_DIR = path.resolve(__dirname, "src");
const config = {
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR,
    filename: "bundle.js",
    publicPath: "/app/"
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        use: [
          {
            loader: "babel-loader",
            query: {
              presets: ["react", "env"]
            }
          }
        ],
        exclude: /node_modules/
      },

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "css/bundle.css",
      disable: false,
      allChunks: true
    })
  ],
  resolve: {
    extensions: [".jsx", ".js"]
  }
};
module.exports = config;
