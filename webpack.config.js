'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const preprocess = require('preprocess');
const webpack = require('webpack');
const WebpackFilePreprocessorPlugin = require('webpack-file-preprocessor-plugin');

const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const devtool = 'source-map';
const preprocessContext = {
    ts: Date.now()
};

const entry = {
    index: [
        'babel-polyfill',
        path.resolve(__dirname, 'src/index.js')
    ]
};

const modules = {
    rules: [
    {
        test: /src.*\.js$/,
        exclude: /node_modules(\/|\\)(?!(@feathersjs|debug))/,
        use: [
        {
            loader: 'babel-loader',
            options:
            {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }]
    },
    {
        test: /src.*\.html$/,
        use: [
        {
            loader: 'raw-loader'
        }]
    },
    {
        test: /src.*\.(s?css|sass)$/,
        exclude: [/\.js$/, /\.html$/, /\.json$/],
        use: ExtractTextPlugin.extract(
        {
            fallback: 'style-loader',
            use: [
            {
                loader: 'css-loader'
            },
            {
                loader: "sass-loader"
            }]
        })
    },
    {
        test: /(bootstrap\/dist\/css\/bootstrap.min.css)$/,
        exclude: [/\.js$/, /\.html$/, /\.json$/],
        use: ExtractTextPlugin.extract(
        {
            fallback: 'style-loader',
            use: [
            {
                loader: 'css-loader'
            }]
        })
    }]
};

const plugins = [
    new ExtractTextPlugin(
    {
        disable: process.env.NODE_ENV !== 'production',
        filename: '[name].[contenthash].css'
    }),

    new HtmlWebpackPlugin(
    {
        hash: true,
        inject: 'head',
        template: './src/index.html'
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    new CommonsChunkPlugin(
    {
        minChunks: (module, count) => module.resource && module.resource.indexOf(path.resolve(__dirname, 'src')) === -1,
        name: 'vendor'
    }),

    new WebpackFilePreprocessorPlugin(
    {
        pattern: /index\.html$/,
        process: (source) => preprocess.preprocess(source.toString(), preprocessContext)
    })
];

const resolve = {
    descriptionFiles: ['package.json'],
    modules: ['node_modules']
};

const watchOptions = {
    ignored: /node_modules/
};

module.exports = {
    // devtool,
    // entry,
    // module: modules,
    // plugins,
    // resolve,
    // watchOptions
};