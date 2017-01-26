let webpack = require('webpack')

var path = require('path');
module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [
      { test: path.join(__dirname, 'src'),
        loader: 'babel-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  // uncomment everything below here to build a tiny production bundle
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({minimize: true})
  // ],
  // externals: {
    // react: "React",
    // redux: "redux",
    // "react-redux": "React",
    // "lodash": "_",
  // }
};
