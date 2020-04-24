const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = () => {
  const plugins = [
    new CleanWebpackPlugin({
      verbose: true
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      title: "React Payday",
      appName: "App"
    }),
    new webpack.HotModuleReplacementPlugin()
  ];
  
  const webpackConfig = {
    entry: path.resolve(__dirname, 'src/App.jsx'),
    resolve: {
      extensions: ['.js', '.jsx']
    },
    serve: {
      port: 4000,
      content: './dist'
    },
    devServer: {
      inline: true,
      port: 7000,
      contentBase: './dist',
      hot: true,
      index: 'index.html',
      lazy: false,
      open: true,
      writeToDisk: true,
      publicPath: '/',
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          include: [
            path.resolve(__dirname, 'src')
          ],
          use: {
            loader: "eslint-loader"
          }
        },
        {
          test: /\.css$/i,
          include: [
            /node_modules/,
            path.resolve(__dirname, 'src')
          ],
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(jpg|png|gif|jpeg|woff|woff2|eot|ttf)$/,
          loader: 'url-loader?limit=100000'
        },
        {
          test: /\.(svg|png|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name][hash].[ext]'
              }
            }
            // {
            //   loader: 'svgo-loader',
            //   options: {
            //     plugins: [
            //       {removeTitle: true},
            //       {convertColors: {shorthex: false}},
            //       {convertPathData: false}
            //     ]
            //   }
            // }
          ]
        },
        {
          enforce: 'post',
          test: /\.(js|jsx)$/i,
          exclude: /(node_modules)/,
          include: [
            path.resolve(__dirname, 'src')
          ],
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/env'
            ]
          }
        }
      ]
    },
    plugins
  };
  
  return webpackConfig;
}
