module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
    },
    extends: 'eslint:recommended',
    rules: {
        'comma-dangle': ['error', 'always-multiline'],
        'indent': ['error', 4],
        'no-trailing-spaces': 'error',
        'quotes': ['error', 'single'],
        'semi': 'off',
        'array-bracket-spacing': ['error', 'never'],
    },
};
