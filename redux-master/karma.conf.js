var webpack = require('webpack');

module.exports = function (config) {
  config.set({

    browsers: [ 'Chrome' ],

    singleRun: true,

    plugins: ['karma-mocha','karma-webpack'],
    frameworks: [ 'mocha' ],

    preprocessors: {
      'tests.webpack.js': [ 'webpack'],
    },

    reporters: [ 'dots'],

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },


    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader' }
        ]
      }
    },

    webpackServer: {
      noInfo: true
    }

  });
};
