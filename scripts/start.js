import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config.js';
import path from 'path';

const ROOT_PATH = path.join(__dirname, '../');

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  hot: true,
  contentBase: path.join(ROOT_PATH),
  stats: { colors: true },
});

server.listen(7777, 'localhost', () => {
  console.log('server on localhost:7777');
});
