module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  rules: {
    'no-console': ['error'],
    '@typescript-eslint/no-require-imports': 'off',
    'no-warning-comments': ['error', {terms: ['console'], location: 'start'}],
  },
};
