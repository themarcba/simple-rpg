'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './source/Game.js',
    output: {
        path: path.resolve(__dirname, 'public/'),
        filename: 'bundle.js',
        library: 'Game',
        libraryTarget : 'var'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['env']
                }
            }
        ]
    },
    watchOptions: {
        poll: true
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
	plugins: [
		new webpack.DefinePlugin({
			'__DEV__' : false
		}),
		new webpack.optimize.AggressiveMergingPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			mangle: true,
            sourceMap: true,
			compress: {
				warnings: false, // Suppress uglification warnings
				pure_getters: true,
				unsafe: true,
				unsafe_comps: true,
				screw_ie8: true
			},
			output: {
				comments: false,
			},
			exclude: [/\.min\.js$/gi] // skip pre-minified libs
		}),
	]
};