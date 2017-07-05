var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var SOURCE_FOLDER = './src/main/webpack';
var BUILD_FOLDER = "./target";
var PACKAGE_PATH=''; // Optional
var DESTINATION_FOLDER = BUILD_FOLDER + '/classes/' + PACKAGE_PATH  + '/dist';
var PUBLIC_PATH = '/dist'; // Optional

module.exports = {
    entry: SOURCE_FOLDER + '/index.js',
    output: {
    	path: DESTINATION_FOLDER,
    	publicPath: PUBLIC_PATH,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader?sourceMap!less-loader?sourceMap')
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'url-loader?limit=10240&absolute&name=/images/[name]-[hash:7].[ext]'
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)$/,
                loader: 'url-loader?limit=10240&name=/fonts/[name]-[hash:7].[ext]'
            }
        ]
    },
    plugins: [
//        new CopyWebpackPlugin([{from: SOURCE_FOLDER + '/static', to: DESTINATION_FOLDER + '/dist' }]), // maven resources plugin does this.
        new ExtractTextPlugin('/style.css')
    ],
    devtool: '#source-map'
};
