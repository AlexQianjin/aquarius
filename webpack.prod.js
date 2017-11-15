'use strict';
var path = require('path');
var webpack = require('webpack');
module.exports = {
	entry: [
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'public', 'assets'),
		filename: 'bundle.js',
		publicPath: '/assets/'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
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
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /(node_modules|bower_components)/,
			// include: path.join(__dirname, 'source'),
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['es2015', 'stage-2', 'react']
				}
			}
		},
		{
			test: /\.less$/,
			exclude: /node_modules/,
			use: [{
				loader: 'style-loader' // creates style nodes from JS strings
			}, {
				loader: 'css-loader' // translates CSS into CommonJS
			}, {
				loader: 'less-loader' // compiles Less to CSS
			}]
		}]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css', '.less']
	}
};
