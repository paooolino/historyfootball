const path = require('path');
const WebpackFtpUpload = require('webpack-ftp-upload-plugin');
const configDev = require('config-dev.js');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new WebpackFtpUpload({
      host: configDev.ftp.HOST,
      port: configDev.ftp.PORT,
      username: configDev.ftp.USERNAME,
      password: configDev.ftp.PASSWORD,
      local: path.join(__dirname, 'dist'),
      path: configDev.ftp.REMOTEPATH,
    })
  ]
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
