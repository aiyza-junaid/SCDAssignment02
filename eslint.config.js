// Import required modules
const globals = require("globals");
const pluginJs = require("@eslint/js");
const pluginReactConfig = require("eslint-plugin-react/configs/recommended.js");

// Define ESLint configuration
const config = [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReactConfig,
];


module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
  },
  // Other ESLint configuration...
  ...config,
};
