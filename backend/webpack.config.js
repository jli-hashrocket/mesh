const path = require('path');


module.exports = [{
  entry: './src/styles/style.scss',
  output: {
    // This is necessary for webpack to compile
    // But we never use style-bundle.js
    path: path.join(__dirname, "/public/dist"),
    publicPath: "/public/dist",
    filename: 'style-bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader'},
        ]
      }
    ]
  },
  mode: 'development'
}];