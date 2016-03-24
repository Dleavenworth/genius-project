var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8000',
    'webpack/hot/only-dev-server',
    './scripts/index'
  ],
  output: {
    path: __dirname + '/scripts/',
    filename: 'bundle.js',
    publicPath: '/scripts/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.css$/, loaders: ['style', 'css'] }
    ]
  }
};
