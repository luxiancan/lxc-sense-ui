const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const externals = [{
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue',
  },
  axios: 'axios',
  '@xiaoe/material_center_box':'@xiaoe/material_center_box',
  '@xiaoe/material_center_box/static/index.css':'@xiaoe/material_center_box/static/index.css'
}, nodeExternals()];

module.exports = {
  mode: 'production',
  entry: {
    app: [path.resolve(__dirname, '../libEntry/build/index.js')]
  },
  output: {
    path: path.resolve(__dirname, '../static'),
    filename: 'index.js',
    chunkFilename: '[id].js',
    libraryExport: 'default',
    library: 'SENSE',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    modules: ['node_modules']
  },
  performance: {
    hints: false
  },
  optimization: {
    minimize: false
  },
  externals,
  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.scss/,
        use: [{
          loader:MiniCssExtractPlugin.loader
        },{
          loader: 'css-loader',
          options: { importLoaders: 3 }
        }, 'postcss-loader', 'sass-loader',      
         {
            loader: 'sass-resources-loader',
            options: {
                resources: path.resolve('./', 'src/assets/scss/index.scss')
            }
          }
        ]
      },
      {
        test: /\.css/,
        use: [{
          loader: MiniCssExtractPlugin.loader
        }, 'css-loader']
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "index.css",
      chunkFilename: "[id].css"
    }),
    new OptimizeCssAssetsPlugin()
  ]
};