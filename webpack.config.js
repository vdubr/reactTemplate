var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output : {
      path : __dirname + "/dist",
      filename : 'bundle.js',
      publicPath : '/'
    },
    devtool: 'source-map',
    debug: true,

    module: {
        loaders: [
            {
              test: /.js?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                presets: ['es2015', 'react']
              }
            },
            {
              test: /\.html$/,
              loaders: ["html"]
            }
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
};
