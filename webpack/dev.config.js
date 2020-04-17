const baseConfig = require('./base.config');
const merge = require('webpack-merge');

const config = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: 'dist',
    host: '0.0.0.0',
    port: 3000,
  },
});

module.exports = config;
