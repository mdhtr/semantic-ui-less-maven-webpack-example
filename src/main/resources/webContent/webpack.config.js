var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'dist/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('css-loader!postcss-loader!less-loader')
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'url-loader?limit=10240&absolute&name=/dist/images/[name]-[hash:7].[ext]'
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)$/,
                loader: 'url-loader?limit=10240&name=/dist/fonts/[name]-[hash:7].[ext]'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{from: './src/static', to: './dist'}]),
        new ExtractTextPlugin('./dist/style.css')
    ]
};
