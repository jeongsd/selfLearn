import webpack from 'webpack';
import path from 'path';

const rootPath = path.join(__dirname, '../');

export default {
  entry: [
    path.join(rootPath, 'src/index.js'),
    'webpack-dev-server/client?http://localhost:7777',
    'webpack/hot/dev-server',
  ],
  output: {
    path: path.join(rootPath, '/dist'),
    filename: 'bundle.js',
    publicPath: '/assets/',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.json$/, loader: 'json' },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
