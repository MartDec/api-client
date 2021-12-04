module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'no-var': 'error',
    'semi': ['error', 'always'],
    'prefer-const': 'warn',
    'no-await-in-loop': 'error',
    'no-duplicate-imports': 'error',
    'eqeqeq': 'error',
    'no-console': 'warn',
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never'
    }]
  },
};
