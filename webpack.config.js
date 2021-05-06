const path = require('path');
const GasPlugin = require('gas-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // Generate top level declarations from global object
    new GasPlugin(),

    // Add your plugins here
    // Learn more obout plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
        type: 'asset',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
