module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './app/main.js'
  ],
  output: {
    path: './build',
    filename: 'bundle.js',
  }
};
