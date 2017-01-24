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
  }
};
