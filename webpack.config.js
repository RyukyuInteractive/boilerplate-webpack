module.exports = {
  mode: 'development',
  entry: { fruits: './src/fruits.js', vegetables: './src/vegetables.ts' },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] }
        }
      },
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env', '@babel/typescript'] }
        }
      }
    ]
  },
  resolve: { extensions: ['.ts'] }
};
