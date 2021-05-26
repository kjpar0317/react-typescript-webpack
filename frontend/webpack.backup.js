const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnaylyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const devMode = process.env.NODE_ENV !== 'production';
let dotenv;

if(devMode) {
    dotenv = require('dotenv').config({path: __dirname + '/.env'});
} else {
    dotenv = require('dotenv').config({path: __dirname + '/.env.production'});
}

const { REACT_APP_BASE_URI } = dotenv.parsed;
const { WEB_SOCKET_URI } = dotenv.parsed;

module.exports = {
    entry: ['./src/index.tsx'],
    target: 'web',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        publicPath: '/',
        filename: '[name]-bundle.js',
        chunkFilename: '[name]-[chunkhash].js',
    },
    optimization: {
        splitChunks:{
            chunks: 'all', //비동기, 동기 모듈 하나의 번들로 합치기
            automaticNameDelimiter: '~',  //청크 구분자 설정
            maxAsyncRequests: 30, //on-demand 로딩시 최대 병렬 요청 처리 수
            maxInitialRequests: 30, //entry-point에서 최대 병렬 요청 처리 수
            hidePathInfo: true, //최대 크기로 나뉘어 이름이 만들어 질 때 path 노출 가리기
            minSize: 20000, //청크 최소 크기(바이트 단위) 현재 설정은 20KB
            maxSize: 1000000, // 웹팩에게 maxSize보다 더 큰 청크는 나누라고 웹팩에게 말해주는 요소... 현재 설정은(1MB)
            minChunks: 1,
            cacheGroups: {
                node_vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10, //번들이 여러 cacheGroup에 속할 수 있을 때 priority가 높은 규칙에 속하게 된다
                    reuseExistingChunk: true, //메인 번들로부터 이미 분할된 모듈은 재사용
                    filename: '[name].vendor.bundle.js',
                },
                default : {
                    priority: -20,
                    reuseExistingChunk: true,
                    filename: '[name].bundle.js',
                }
            }
        },
        minimize: true, // TerserPlugin이나 다른 플러그인을 통하여 번들 크기를 최소화 하도록 하는 옵션
        minimizer: [new TerserPlugin()], //번들 크기를 최소화 하는데 사용하는 플러그인
        moduleIds: 'size', //웹팩이 모듈 id를 선택할 때 사용하는 알고리즘 지정('size'가 초기 로딩시 좋음)
        mangleWasmImports: true, //WASM(웹 어셈블리)에 의해 변경되는 문자열을 더 작은 사이즈로 만듬
        removeEmptyChunks: true, //사용하지 않거나 비어있는 청크를 제거하는 옵션
        mergeDuplicateChunks: true, //중복되는 청크를 합치는 옵션
        occurrenceOrder: true, //가장 작은 초기 번들을 생성할 모듈 순서를 파악하는 옵션
        portableRecords: true, // context 폴더를 움직이는데 웹팩이 상대경로를 생성하고 기록하도록 하는 옵션
        flagIncludedChunks: true, // 더 큰 청크가 이미 로드되었을 때 하위 집합을 로드할 필요가 없으니 하위 집합을 플래그로 지정하여 사용하도록 지정
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, './src/'),
        },
    },
    // devtool: 'eval-source-map', // 모든 기능이 포함된 완전한 소스맵을 별도의 파일로 생성한다. 이 옵션은 최고 품질의 소스맵을 생성하지만 빌드 프로세스가 느려진다.
    // devtool: 'source-map', // 별도의 파일에 컬럼 매핑을 제외한 소스맵을 생성합니다. 컬럼 매핑을 생략하면 빌드 속도가 향상되지만 디버깅할때는 약간의 불편함이 있습니다. 브라주저가 개발자 툴은 원래 소스 파일의 행을 가리킬 수 있으며, 특정 컬럼을 가르킬 수 없습니다.
    // devtool: 'cheap-module-eval-source-map', // 빌드 중에 소스 맵을 생성하는 가장 빠른 방법입니다. 생성되는 소스맵에는 자바스크립트 파일이 컬럼 매핑을 제외하고 동일하게 인라인으로 포함됩니다. 이전 옵션과 마찬가지로 자바스크립트 실행 시간에 부정적인 영향을 미치므로 실무용 번들
    devtool: devMode? 'cheap-module-eval-source-map': 'source-map',
    devServer: {
        port: 3000,
        // host: '0.0.0.0',
        inline: true,
        hot: true,
        // historyApiFallback: {
        //  index: '/templates/index/index.html'
        // },
        contentBase: path.resolve(__dirname, 'public', 'dist'),
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: REACT_APP_BASE_URI,
            },
            '/auth': {
                target: REACT_APP_BASE_URI,
            },
            '/websocket': {
                target: WEB_SOCKET_URI,
                ws: true
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
                use: [ devMode ?  'style-loader': MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                            importLoaders: 1,
                        }
                    }
                ]
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
            hash: true,
            template: path.resolve(__dirname, 'public', 'index.html'),
            favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
            minify: devMode
                ? false
                : {
                      collapseWhitespace: true,
                      removeComments: true,
                  },
        }),
        new PreloadWebpackPlugin({
            rel: 'preload',
            include: 'allAssets',
            fileWhitelist: [/\.(woff2?|eot|ttf|otf)(\?.*)?$/i],
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
        new HardSourceWebpackPlugin.ExcludeModulePlugin([
            {
                // HardSource works with mini-css-extract-plugin but due to how
                // mini-css emits assets, assets are not emitted on repeated builds with
                // mini-css and hard-source together. Ignoring the mini-css loader
                // modules, but not the other css loader modules, excludes the modules
                // that mini-css needs rebuilt to output assets every time.
                test: /mini-css-extract-plugin[\\/]dist[\\/]loader/,
            }
        ]),
        new CopyWebpackPlugin({
            patterns: [{ from: 'src/images', to: 'images' }],
            options: {
                concurrency: 100,
            },
        }),
        /*new BundleAnaylyzerPlugin(), */
    ],
    node: { fs: 'empty' },
    externals: [{ './cptable': 'var cptable' }, { './jszip': 'jszip' }]
};
