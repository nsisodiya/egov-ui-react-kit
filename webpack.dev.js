var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: './src/demo/demo.js',
  devServer: {
    publicPath: '/',
    contentBase: './demo',
    port: 8912,
    historyApiFallback: true,
    hot: false,
    progress: true,
    open: true
  },
  output: {
    path: `${__dirname}/demo`,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [new CopyWebpackPlugin([{ from: 'src/demo/index.html' }])],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  }
};
