var webpack = require("webpack");
var path = require('path');

module.exports = {
  entry: {
    'simple': ['./examples/simple.js']
  },

  output: {
    path: path.join(__dirname, 'build', 'examples'),
    filename: '[name].js'
  },

  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader'},
      {test: /\.css/, loader: 'style!css'},
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/octet-stream"},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=image/svg+xml"}
    ]
  },

  resolve: {
    root: __dirname,
    alias: {
      'rc-tip/assets/index.css': 'assets/index.css',
      'rc-tip': 'index.js'
    }
  },

  externals: {
    react: "React"
  },

  plugins: [
    // ./robot is automatically detected as common module and extracted
    new webpack.optimize.CommonsChunkPlugin("common.js")
  ]
};
