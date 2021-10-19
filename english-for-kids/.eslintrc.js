module.exports = {
  env: {
    "es6": true,
  },
  extends: [
    'airbnb-typescript'
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: "module",
  }
};