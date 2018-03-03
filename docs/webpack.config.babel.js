const path = require('path');
const webpack = require('webpack');

const sourcePath = path.join(__dirname, 'App.js');

const config = {
  mode: 'production',
  entry: sourcePath,
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      sourcePath,
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, '../node_modules')
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        include: sourcePath,
      },
    ],
  },
  plugins: [],
  devServer: {
    compress: true,
    port: 9000
  },
  optimization: {
    minimize: true
  }
};

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  })
);
config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin());
config.plugins.push(new webpack.HashedModuleIdsPlugin());

module.exports = config;
