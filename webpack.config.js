const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: {
    app: './src/index',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      // minSize: 30000,
    },
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
      },
    ],
  },
  externals: {
    React: 'react',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'test',
      filename: 'remoteEntry.js',
      exposes: {
        './demo1': './src/demo1',
        './demo2': './src/demo2',
      }
    })
  ]
}