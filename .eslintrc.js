module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: ['react'],
  rules: {
    strict: 'off',
    'no-console': 0,
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-extraneous-dependencies': 'off',
    tab_size: 2,
    translate_tabs_to_spaces: true,
  },
};
