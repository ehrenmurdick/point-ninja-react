'use strict';

var wallabyWebpack = require('wallaby-webpack');
var webpackPostprocessor = wallabyWebpack({});

module.exports = function (wallaby) {

  return {
    files: [
      { pattern: 'src/**/*.js', load: false },
      { pattern: 'src/**/*.ts', load: false },
      { pattern: 'src/**/*.tsx', load: false }
    ],

    tests: [
      { pattern: 'spec/**/*Spec.js', load: false },
      { pattern: 'spec/**/*Spec.tsx', load: false }
    ],

    compilers: {
      '**/*.ts*': wallaby.compilers.typeScript()
    },

    postprocessor: webpackPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    }
  };
};
