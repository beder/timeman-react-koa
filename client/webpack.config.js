module.exports = {
  entry: './client.js',
  output: {
    path: './',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 3500,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      }
    ]
  }
}
