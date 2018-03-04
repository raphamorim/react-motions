const path = require('path');
const webpack = require('webpack');

const sourcePath = path.join(__dirname, 'index.js');

const config = {
  target: 'web',
  mode: 'production',
  entry: sourcePath,
  output: {
    path: __dirname,
    library: 'react-motions',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: 'react-motions.min.js',
  },
  externals: {
    // Use external version of React
    "react": "React"
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
        include: [sourcePath, path.join(__dirname, 'src')],
      },
    ],
  },
  plugins: [],
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
