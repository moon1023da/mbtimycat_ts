module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeature: {
      jsx: true,
    },
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off"
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};