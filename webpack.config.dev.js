const path = require('path');
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
    entry: './src/index',
    mode:'development',
    output: {   
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
            },
            {
            test: /\.css$/,
            use: ['style-loader' , 'css-loader']
            }
        ]
    }
}