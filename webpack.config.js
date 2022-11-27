const path = require("path");
//simplifies creation of HTML files to serve the webpack bundles => generates html
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "build"),
  },
  //allows us to control how webpack notifiess devs of assets and entry points over a specific file limit
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  //controls how source maps are generated - good for debugging, allows devs to examine original code over generated one
  //https://ehsangazar.com/source-maps-and-how-it-works-b3f93ca7ea5
  devtool: "eval-cheap-source-map",
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  devServer: {
    //specifies host to use
    host: "localhost",
    //enables hmr
    hot: true,
    static: {
      //specifies where to serve static content from
      directory: path.join(__dirname, "public"),
      //specifies at which URL to serve static directory (public) content
      publicPath: "/",
    },
    //enables gzip compression
    compress: false,
    port: 8080,
    historyApiFallback: true,
    //need to change the proxy to '/graphql in order to render the graphi GUI
    proxy: {
      "/graphql": {
        target: "http://localhost:3000",
        secure: false,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
