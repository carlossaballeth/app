const RULES = {
  OFF: 'off',
  ERROR: 'error',
  WARN: 'warn'
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/react-in-jsx-scope': RULES.OFF,
    'eol-last': RULES.OFF,
    'space-before-function-paren': RULES.OFF
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
