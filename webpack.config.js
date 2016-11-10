var ExtractTextPlugin = require('extract-text-webpack-plugin');
var sassLoader = require.resolve('sass-loader');
var cssLoader = require.resolve('css-loader');
var fileLoader = require.resolve('file-loader');
var urlLoader = require.resolve('url-loader');
module.exports = {
    entry: './src/app.js',
    output: {
        path: 'dist/',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.scss|\.css$/,
                loader: ExtractTextPlugin.extract(cssLoader + '?sourceMap!' + sassLoader + '?sourceMap')
            },
            {
                test: /\.gif$/,
                loader: urlLoader
            },
            {
                test: /\.png$/,
                loader: urlLoader
            },
            {
                test: /\.jpg$/,
                loader: urlLoader
            },
            {
                test: /\.jpeg$/,
                loader: urlLoader
            },
            {
                test: /\.woff(2)?((\?v=[0-9]\.[0-9]\.*[0-9]*)|(\?-[A-Za-z0-9]+))?$/,
                loader: urlLoader + "?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)((\?v=[0-9]\.[0-9]\.*[0-9]*)|(\?-[A-Za-z0-9]+))?$/,
                loader: urlLoader + "?limit=100000"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css', {
            allChunks: true
        })
    ]
};
