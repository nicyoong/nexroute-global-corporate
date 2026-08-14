const { glob } = require("eslint/config");

module.exports = [
  ...glob.defaults,
  {
    ignores: [".next/"],
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];
