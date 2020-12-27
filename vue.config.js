// eslint-disable-next-line
const path = require('path');

module.exports = {
  lintOnSave: false,
  devServer: {
    port: 3000,
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@assets', path.resolve('src/assets'));
  },
};
