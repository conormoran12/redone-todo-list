const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        dom: './src/dom.js',
        todo: './src/todo.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    mode: `development`,
    optimization: {
        splitChunks: {
            chunks: 'all', // Split all chunks (both app code and node_modules)
        },
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Todo List',
            myPageHeader: 'Hello World',
            template: './src/index.html',
            filename: 'index.html' //relative to root of the application
        }),
        new ESLintPlugin({ // Add ESLint plugin
            extensions: ['js'], // Lint only JavaScript files
            emitWarning: true,
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        runtimeChunk: 'single',
    },
};