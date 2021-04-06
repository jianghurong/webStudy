const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    // watch: true,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/assets/',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true, // 为每个静态文件开启gzip
        port: 9000,
        hot: true
    }
}