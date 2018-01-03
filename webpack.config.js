const path = require('path');

module.exports = {
    entry: {
      main: './app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'web.js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};