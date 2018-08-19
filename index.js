/**
 * 包含所有ESlint规则，使用babel-eslint作为解析器
 * @fixable 表示此配置支持 --fix
 * @off 表示此配置被关闭了，并且后面说明了关闭的原因
 */

const rules = require('./rules')

module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    }
  },

  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },

  // 以当前目录为根目录，不再向上查找 .eslintrc.js
  root: true,

  // 这些规则与 JavaScript 代码中可能的语法错误或逻辑错误有关
  rules: rules
};
