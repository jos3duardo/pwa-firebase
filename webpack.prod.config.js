const merge = require('webpack-merge')
const webpackBase = require('./webpack.config')
const CompressionWebPackPlugin = require('compression-webpack-plugin')
const WorkbosPlugin = require('workbox-webpack-plugin')
const webpack = require('webpack')

module.exports = merge(webpackBase, {
    plugins: [
        new CompressionWebPackPlugin({
            test: /\.js/
        }),
        new WorkbosPlugin.GenerateSW(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': "'production'"
            }
        })
    ]
})