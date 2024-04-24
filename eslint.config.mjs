// Import required modules
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

// Define ESLint configuration
const config = [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReactConfig,
];

// Polyfill optional chaining and nullish coalescing for environments that don't support them
if (!config[0].languageOptions) {
  config[0].languageOptions = { ecmaVersion: 2021 };
} else if (!config[0].languageOptions.ecmaVersion) {
  config[0].languageOptions.ecmaVersion = 2021; 
}

export default config;
