require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const BUILD_ROOT = path.join(__dirname, '../dist');
const SRC_ROOT = path.join(__dirname, '../src');

module.exports = {
  context: SRC_ROOT,
  entry: path.resolve('src', 'index.ts'),
  externals: [nodeExternals()],
  output: {
    filename: 'server.js',
    path: BUILD_ROOT,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_moduels/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.json',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '@': path.join(__dirname, '/src/'),
    },
  },
};
