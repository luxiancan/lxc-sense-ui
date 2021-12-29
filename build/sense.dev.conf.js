const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

console.log('\n')
console.log('This program is running at http://localhost:8080')
console.log('\n')

module.exports = {
  mode: 'development',
  entry: {
    app: resolve('src/main.js')
  },
  output: {
    path: resolve('static'),
    filename: 'index.js',
    chunkFilename: '[id].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
    },
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter'),
          emitWarning: true,
          emitError: true
        }
      },
      {
        test: /\.(jsx?|babel|es6)$/,
        loader: 'babel-loader',
        options: {
          "babelrc": true,
          "plugins": [
            "@babel/plugin-syntax-dynamic-import"
          ]
        }
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
        test: /\.css/,
        use: ['style-loader', 'css-loader']
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
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: 'localhost',
    port: '8080',
    open: true, // 启动后自动打开浏览器窗口
    overlay: { warnings: false, errors: true }, // 全局提示错误
    publicPath: '/', // 公共资源目录
    // 请求代理
    proxy: {
      '/': {
        target: 'http://admin.inside.xiaoe-tech.com',
        changeOrigin: true,
        cookieDomainRewrite: 'localhost',
        onProxyReq (proxyReq) {
          proxyReq.setHeader('X-Front-Username', '13333333333');
          proxyReq.setHeader('X-Front-Password', '123456');
          proxyReq.setHeader('X-Front-Appid', 'apppcHqlTPT3482');
        }
      },
    },
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: false,
    },
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: resolve('index.html') },
      ],
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('index.html'),
      filename: 'index.html',
    }),
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "index.css",
      chunkFilename: "[id].css"
    }),
    new OptimizeCssAssetsPlugin()
  ]
};
