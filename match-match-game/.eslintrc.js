module.exports = {
  env: {
    "es6": true,
  },
  extends: [
    'airbnb-typescript/base',
    'prettier'
  ],
  plugins: [
    'prettier'
  ],
  rules: {
    'prettier/prettier': ['error'],
  },
  parserOptions: {
    project: './tsconfig.json',
  }
};