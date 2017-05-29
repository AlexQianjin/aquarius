'use strict';
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: [
        './source/index'
    ],
    output: {
        path: path.join(__dirname, 'public', 'assets'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [{
            tests: /\.(js|jsx)$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'source')
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};