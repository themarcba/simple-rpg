'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './source/game.js',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'game.js',
        libraryTarget: 'window'
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
    watch: true,
    watchOptions: {
        poll: true
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
	plugins: [
		new webpack.DefinePlugin({
			'__DEV__' : true
		})
	]
};