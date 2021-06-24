const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/quiz1.js',
  output: {
    filename: 'app.js',
    path: `${__dirname}/dist`,
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/quiz1.html',
    }),
  ],
};