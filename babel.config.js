module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@constant': './src/constant',
          '@navigation': './src/navigation',
          '@pages': './src/pages',
          '@utility': './src/utility',
        },
      },
    ],
  ],
};
