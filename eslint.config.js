const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  ...compat.extends("plugin:eslint-plugin-prettier/recommended"),
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
      },
    },
  },
];
