var webpack = require('webpack');

module.exports = function (config) {
  config.set({

    browsers: [ process.env.CONTINUOUS_INTEGRATION ? 'Firefox' : 'Chrome' ],

    singleRun: true,

    frameworks: [ 'mocha' ],

    files: [
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ],
      'src/**/*.js': ['coverage']
    },

    reporters: [ 'dots' , 'coverage'],

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
