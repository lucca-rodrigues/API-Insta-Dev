module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'no-param-reasign': 'off',
    camelCase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'max-len': ['error', { code: 80 }],
  },
};
