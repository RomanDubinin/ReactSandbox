var webpack = require('webpack');
module.exports = {
  entry: {
    app: './app.js'
  },
  mode: 'development',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader:[ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        loader:[ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  }
}
