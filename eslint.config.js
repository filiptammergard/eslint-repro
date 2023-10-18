const config = require("./config");

module.exports = [
  config,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
      },
    },
  },
];
