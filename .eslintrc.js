module.exports = {
    env: {
      browser: true,
      es6: true
    },
    extends: [
      'standard'
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': 'error',
      // allow async-await
      'generator-star-spacing': 'off',
      // allow debugger during development
      'no-debugger': 'off',
      // 忽略function圆括号前没有空格
      'space-before-function-paren': 'off'
    },
    overrides: [{
      'files': ['src/**/*.js'],
      'excludedFiles': ['node_modules'],
      'rules': {
        'quotes': ['off', 'double'],
        // 使用分号
        'semi': ["error", "always"]
      }
    }]
  }