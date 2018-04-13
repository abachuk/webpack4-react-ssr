module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'stage-0', 'stage-2', 'env'],
            plugins: [require('babel-plugin-transform-class-properties')]
          }
        }
      }
    ]
  }
}