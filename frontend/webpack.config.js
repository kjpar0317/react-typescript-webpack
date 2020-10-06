const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const env = require('dotenv');

env.config();

const devMode = process.env.NODE_ENV !== 'production';
const { REACT_APP_BASE_URI } = process.env;

module.exports = {
    entry: ['@babel/polyfill', './src/index.tsx'],
    target: 'web',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        publicPath: '/',
        filename: '[name]-bundle.js',
        chunkFilename: '[name]-[chunkhash].js',
    },
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, './src/'),
        },
    },
    devtool: 'source-map',
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
                // ws: true
            },
            '/login': {
                target: REACT_APP_BASE_URI,
            },
        },
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
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            experimentalWatchApi: true,
                        },
                    },
                ],
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'source-map-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            debug: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)(\?.*$|$)/,
                loader: 'file-loader',
                options: {
                    name: 'images/[folder]/[name].[ext]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)(\?.*$|$)/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[folder]/[name].[ext]',
                },
            },
            {
                test: /\.(svg)(\?.*$|$)/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new ForkTsCheckerPlugin(),
        new HardSourceWebpackPlugin({
            // Either a string of object hash function given a webpack config.
            configHash: function (webpackConfig) {
                // node-object-hash on npm can be used to build this.
                return require('node-object-hash')({ sort: false }).hash(
                    webpackConfig,
                );
            },
            // Either false, a string, an object, or a project hashing function.
            environmentHash: {
                root: process.cwd(),
                directories: [],
                files: ['package-lock.json', 'yarn.lock'],
            },
        }),
        new CopyWebpackPlugin({
            patterns: [{ from: 'src/images', to: 'images' }],
            options: {
                concurrency: 100,
            },
        }),
    ],
};
