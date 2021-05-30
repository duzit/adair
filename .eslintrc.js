module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'quotes': ['error', 'single'],
    'indent': ['error', 2, {
      ignoredNodes: ['*.vue']
    }],
    'max-len': ['error', 140],
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 0
    }],
    'vue/script-indent': ['error', 2, {
      baseIndent: 1,
      switchCase: 1
    }],
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never'
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      'startTag': 'never',
      'endTag': 'never',
      'selfClosingTag': 'always'
    }],
    'vue/html-indent': ['error', 2],
    'vue/no-unused-vars': 'off',
    'key-spacing': ['error', {'beforeColon': false, 'afterColon': true}], 
    'space-infix-ops': 'error',                                         
    'comma-spacing': ['error', {'before': false, 'after': true}],        
    'arrow-spacing': ['error', { 'before': true, 'after': true }],      
    'prefer-const': 'error',                                            
    'no-extra-parens': 'error',                                       
    'no-extra-semi': 'error',                                       
    'no-lonely-if': 2,                                                  
    'comma-dangle': 0,
    'init-declarations': 2,                        
    'space-before-function-paren': [2, 'never'],
    'vue/no-v-html': 0
  },
  // 'no-undefined': 2, // 不允许使用 undefined
  parserOptions: {
    parser: 'babel-eslint'
  },
  overrides: [
    {
      'files': ['*.vue'],
      'rules': {
        'indent': 'off'
      }
    }
  ]
};
