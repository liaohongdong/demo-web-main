/*
 * @Author: hongdong.liao
 * @Date: 2021-05-07 15:45:44
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-13 18:37:49
 * @FilePath: /microDemo/demo-web/demo-web-main/src/settings.js
 */
module.exports = {
    title: '微前端',
    dashboard: {
        icon: '',
        title: '首页',
        path: '/dashboard',
        name: 'dashboard',
    },
    error404: {
        icon: '',
        title: '404',
        path: '/404',
        name: '404',
    },
    extract: {
        'help-center': { // 跳转的帮助中心
            icon: '',
            title: '帮助中心',
            path: '/help-center',
            name: 'goHelpCenter',
        },
    },
    SUB_APP_PREFIX: 'subapp-viewport',
    MENUS: {
        order: {
            devEntry: '//localhost:10003',
            depEntry: '//web-order.demo.cc',
            moduleName: 'order',
        },
        system: {
            devEntry: '//localhost:10002',
            depEntry: '//web-system.demo.com',
            moduleName: 'system',
        },
    },
    noAuthApp: [
        {
            module: 'login',
            defaultRegister: true,
            devEntry: '//localhost:10001',
            depEntry: '//web-login.demo.com',
            routerBase: '/login',
        }
    ],
};
