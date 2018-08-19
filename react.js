const rules = require('./rules/react')

module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
    es6: true,
    amd: false,
    mocha: false
  },

  // dependencies: eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y
  plugin: [
    'react',
    'import',
    'jsx-a11y'
  ],
  
  parser: 'babel-eslint',

  parserOptions: {
    'ecmaVersion': 8,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
      'impliedStrict': true,
      'experimentalObjectRestSpread': true
    }
  },

  rules: rules
}