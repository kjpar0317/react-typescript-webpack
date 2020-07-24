const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const env = require("dotenv");

env.config();

const { REACT_APP_BASE_URI } = process.env;

module.exports = {
  entry: ["@babel/polyfill", "./src/index.tsx"],
  target: "web",
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: '/static/',
    filename: '[name]-bundle.js',
    chunkFilename: '[name]-[chunkhash].js',
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    alias: {
        '@': path.resolve(__dirname, './src/'),
    }
  },
  devServer: {
    port: 3000,
    // host: '0.0.0.0',
    inline: true,
    // hot: true,
    // historyApiFallback: {
    //  index: '/templates/index/index.html'
    // },
    contentBase: path.resolve(__dirname, 'public', 'dist'),
    historyApiFallback: true,
    proxy: {
        '/api': {
            target: REACT_APP_BASE_URI,
            ws: true,
        },
        ['/auth'] : {
            target: REACT_APP_BASE_URI,
        }
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    presets: [
                      '@babel/preset-env',
                      '@babel/preset-typescript',
                    ],
                    // plugins: [
                    //     '@babel/plugin-transform-runtime',
                    //     '@babel/plugin-transform-arrow-functions',
                    //     '@babel/plugin-transform-object-assign'
                    // ]
                  }
            },
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    experimentalWatchApi: true,
                },
            }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
         MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
        },
        {
            loader: 'resolve-url-loader',
            options: {
              debug: true,
            },
        },
        {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
        }
         //  'css-loader',
        //  'sass-loader',
        ],
       },
       {
        test: /\.(png|jpg|jpeg|gif)(\?.*$|$)/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
       },
       {
        test: /\.(svg)(\?.*$|$)/,
        loader: 'url-loader',
        options: {
            name: '[name].[ext]',
        },
       },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
    }),
    new ForkTsCheckerPlugin(),
    new HardSourceWebpackPlugin()
  ],
};
