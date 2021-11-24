const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // A webpack plugin to remove/clean your build folder(s).
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 简单创建 HTML 文件，用于服务器访问

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    resolve: {alias: {vue: 'vue/dist/vue.js'}},
    module: {
        rules: [
            // ... 其它规则
            // {
            //     test  : /\.vue$/,
            //     loader: 'vue-loader',
            // },
            // 它会应用到普通的 `.js` 文件
            // 以及 `.vue` 文件中的 `<script>` 块
            // {
            //     test  : /\.js$/,
            //     loader: 'babel-loader',
            // },
            // 它会应用到普通的 `.css` 文件
            // 以及 `.vue` 文件中的 `<style>` 块
            // {
            //     test: /\.css$/,
            //     use : [
            //         'vue-style-loader',
            //         'css-loader',
            //     ],
            // },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({template: path.join(__dirname, './src/index.html'), filename: 'index.html'}),
        // new VueLoaderPlugin(),
    ],
    devServer: {
        watchFiles: ['src/**/*'],
        static: {
            directory: path.join(__dirname, 'dist'),
            serveIndex: true,
        },
        compress: true,
        port: 8000,
        historyApiFallback: true,
    },
};
