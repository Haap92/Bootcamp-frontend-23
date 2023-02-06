const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'none',
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name][hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use:['style-loader', 'css-loader'],
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: './index.html'
        })
    ]
}