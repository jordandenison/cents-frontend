'use strict';

const path    = require('path');

const webpackConfig = require('./webpack.config');

webpackConfig.devServer = {
  allowedHosts       : [
    'localhost',
    'starchup-local-development.com'
  ],
  compress           : true,
  contentBase        : path.join(__dirname, 'dist'),
  historyApiFallback : true,
  hot                : true,
  inline             : true,
  noInfo             : true,
  port               : 3000,
  host              : '0.0.0.0',
  watchContentBase   : true
};

webpackConfig.devtool = 'inline-source-map';

webpackConfig.output = {
  filename   : '[name].min.js',
  path       : path.resolve(__dirname, 'dist'),
  publicPath : '/'
};

module.exports = webpackConfig;