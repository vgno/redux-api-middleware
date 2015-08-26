'use strict';

const webpack = require('webpack');

module.exports = {
  entry: ['./browsertest/browsertest.js'],
  output: {
    path: './browsertest',
    filename: 'browsertest.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?optional[]=runtime'
      }
    ]
  }
};
