const path = require ('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'main-production.js',
        path: path.resolve(__dirname, 'build'),
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
};