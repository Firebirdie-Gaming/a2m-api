/* eslint-env node */
module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'canonical/auto'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'canonical'],
  root: true,
  rules: {
    'canonical/sort-keys': [
      2,
      'asc',
      {
        caseSensitive: false,
        natural: true,
      },
    ],
  },
};
