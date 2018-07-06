const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const combineLoaders = require('webpack-combine-loaders');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname + '/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',

            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      },

      {
        test: /\.css$/,
        include: /node_modules/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],

  devtool: 'source-map',

  devServer: {
    historyApiFallback: true,
    port: 8090
  },

  stats: {
    errorDetails: true
  }
};
