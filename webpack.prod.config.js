/**
 * 生产环境的配置
 */

let webpack = require('webpack');
let config = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let fs = require('fs');

config.output.publicPath = './dist/';                        // 资源路径,根据需要可改为cdn地址
config.output.filename = '[name].[hash].js';                       // 带hash值的入口js名称
config.output.chunkFilename = '[name].[hash].chunk.js';            // 带hash值的路由js名称

config.plugins = (config.plugins || []).concat([

    // 提取带hash值的css名称
    new ExtractTextPlugin("[name].[hash].css", {
        allChunks: true,
        resolve: ['modules']
    }),

    // 提取带hash值的第三方库
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.[hash].js'),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),

    // 压缩文件
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),

    // 构建html文件
    new HtmlWebpackPlugin({
        filename: '../index_prod.html',
        template: './app/template/index.html',
        inject: 'body'
    })
]);

// 写入环境变量
fs.open('./app/config/env.js', 'w', (err, fd) => {
    const buf = 'export default "production";';
    fs.write(fd, buf, 0, buf.length, 0, (err, written, buffer) => {
        return err;
    });
});

module.exports = config;