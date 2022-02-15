const baseConfig = require('./webpack.config.base');
const Dotenv = require("dotenv-webpack");

module.exports = {
  ...baseConfig,
  mode: 'development',
  watch: true,
  devServer: {
    historyApiFallback: true,
    static: './dist',
  },
  devtool: 'inline-source-map',
  plugins: [
    ...baseConfig.plugins,
    new Dotenv({
      path: "./.env-dev"
    }),
  ]
};
