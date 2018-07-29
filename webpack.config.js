const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const CompressionPlugin = require('compression-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = () => ({
  mode: 'production',
  devtool: 'source-map',
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

  performance: {
    maxEntrypointSize: 712000,
    maxAssetSize: 712000
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
    new WebpackPwaManifest({
      name: 'Store PWA',
      short_name: 'PWA',
      description: 'Awesome PWA!',
      background_color: '#ffffff',
      fingerprints: true,
      inject: true,
      lang: 'en-US',
      theme_color: '#ffffff',
      icons: [
        {
          src: path.join('public', 'logo.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    }),
    new InjectManifest({
      swSrc: path.join('src', 'service-worker.js'),
      swDest: 'service-worker.js'
    })
    // ,
    // new CompressionPlugin({
    //   asset: '[path].gz[query]',
    //   algorithm: 'gzip',
    //   test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
    //   threshold: 10240,
    //   deleteOriginalAssets: true,
    //   minRatio: 0.8
    // })
  ],

  devServer: {
    historyApiFallback: true,
    port: 8090
  },

  stats: {
    errorDetails: true
  }
});
