var path = require('path');
var webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin('assets/[name].css');


module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './source/index'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        extractLess
    ],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query:
            {
                presets:['es2015', 'stage-2', 'react']
            }
        },
        {
            test: /\.(less|css)$/,
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'less-loader' })
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.less']
    }
};