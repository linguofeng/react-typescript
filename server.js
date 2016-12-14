const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const PORT = 3000;

const app = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
  },
});

app.listen(PORT, 'localhost', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Listening at localhost:${PORT}`);
  }
});
