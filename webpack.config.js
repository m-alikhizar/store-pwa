const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = () => ({
  mode: 'production',
  entry: {
    app: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.join(`${__dirname}/dist`),
    publicPath: '/',
    chunkFilename: '[name].js',
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /service-worker\.js/],
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
              localIdentName: '[hash:base64:5]'
            }
          }
        ]
      },

      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  optimization: {
    minimize: true,
    mergeDuplicateChunks: true,

    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      chunks: 'async',
      minSize: 100000,
      maxSize: 175000,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 6,
      automaticNameDelimiter: '~',
      name: true,

      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: -20,
          chunks: 'all'
        }
      }
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Caching and Code Splitting',
      template: './public/index.html'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled'
    }),
    new CopyWebpackPlugin([
      {
        from: require.resolve('workbox-sw'),
        to: 'workbox-sw.prod.js'
      }
    ]),
    new InjectManifest({
      globDirectory: 'dist',
      globPatterns: ['**/*.{html,js,css,png,json}'],
      swSrc: path.join('src', 'service-worker.js'),
      swDest: 'service-worker.js'
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
});
