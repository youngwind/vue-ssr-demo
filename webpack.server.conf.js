const merge = require('webpack-merge');
const base = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(base, {
    target: 'node',
    entry: {
        server: './entry-server.js'
    },
    output: {
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.ssr.html',
            filename: 'index.ssr.html',
            files: {
                js: "client.js"
            },
            excludeChunks: ['server']
        })
    ]
});