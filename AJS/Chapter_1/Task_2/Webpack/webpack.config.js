const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js',
    },
    
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader',
                ],
            },
        ],
    }, 

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),

        new HtmlWebPackPlugin({
            title: 'Test WebPack technology',
            template: './src/index.html',
            filename: './index.html'
        }),
    ],
};
