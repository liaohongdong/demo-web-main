/*
 * @Author: hongdong.liao
 * @Date: 2021-01-05 16:04:57
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-12 18:13:54
 * @FilePath: /microDemo/demo-web/demo-web-main/vue.config.js
 */
const { VUE_APP_PROXY_URL: target,
    VUE_APP_BASE_DEVELOPMENT_PORT: port, } = process.env;

module.exports = {
    // publicPath: './',
    lintOnSave: false,
    devServer: {
        hot: true,
        disableHostCheck: true,
        port,
        overlay: {
            warnings: false,
            errors: true,
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*',
        },
        proxy: {
            '/gw': {
                target,
                changeOrigin: true,
                ws: true,
                pathRewrite: { '^/gw': '', },
                secure: false,
            },
        },
    },
};
