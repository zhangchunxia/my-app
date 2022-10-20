module.exports = {
  plugins: ['simple-import-sort'],
  extends: ['react-app', 'react-app/jest'],
  rules: {
    'no-var': 'error',
    'no-else-return': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',

    'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }],

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
