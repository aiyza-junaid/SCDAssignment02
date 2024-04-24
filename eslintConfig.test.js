// Import the ESLint configuration
const eslintConfig = require('../eslint.config.mjs'); // Adjust the path if necessary

// Describe block for ESLint configuration tests
describe('ESLint Configuration', () => {
  // Test for global variables
  test('Globals', () => {
    expect(eslintConfig.globals).toEqual(expect.objectContaining({
      browser: true,
    }));
  });

  // Test for plugins
  test('Plugins', () => {
    expect(eslintConfig.plugins).toEqual(expect.arrayContaining([
      '@eslint/js',
      'eslint-plugin-react',
    ]));
  });

  // Test for ESLint rules
  test('Rules', () => {
    expect(eslintConfig.rules).toEqual(expect.objectContaining({
      'no-console': 'warn',
    }));
  });

  // You can add more test cases as needed to cover other aspects of your ESLint configuration
});
