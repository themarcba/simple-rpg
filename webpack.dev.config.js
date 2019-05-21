'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './source/Game.js',
    output: {
        path: path.resolve(__dirname, 'public/'),
        filename: 'bundle.js',
        library: 'Game',
        libraryTarget: 'var'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['env']
            }
        }]
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
            '__DEV__': true
        })
    ]
};