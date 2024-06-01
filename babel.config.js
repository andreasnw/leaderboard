module.exports = {
  presets: ['module:@react-native/babel-preset', '@babel/preset-env'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@tests': ['./tests/'],
          '@src': './src/',
        },
      },
    ],
  ],
};
