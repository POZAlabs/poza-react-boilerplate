const path = require('path');

const REACT_PROJECT_ENTRY_PATH = path.resolve(__dirname, './src/index.js');

module.exports = {
  entry: REACT_PROJECT_ENTRY_PATH,
  output:{
    path: path.resolve(__dirname, './.dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}