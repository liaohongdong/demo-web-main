/*
 * @Author: hongdong.liao
 * @Date: 2021-05-07 15:03:25
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-11 18:10:45
 * @FilePath: /microDemo/demo-web/demo-web-main/.eslintrc.js
 */
module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        '@fe-micro/eslint-config-micro'
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        indent: 'off',
    },
};
