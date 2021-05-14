/*
 * @Author: hongdong.liao
 * @Date: 2021-01-05 18:18:47
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-14 11:08:12
 * @FilePath: /microDemo/demo-web/demo-web-main/src/core/app-register.js
 */
import { registerMicroApps, setDefaultMountApp, start, initGlobalState, } from 'qiankun';
import store from '@/store';

import appStore from '../utils/app-store';

let props = {
    data: store.getters,
    parentStore: store,
};
let isDev = process.env.NODE_ENV === 'development'; // 根据开发环境|线上环境加载不同entry

// 用于加载login应用 也就是不需要token的应用
const qianKunStart = (list = []) => {
    let apps = []; // 子应用数组盒子
    let defaultApp = null; // 默认注册应用路由前缀
    list.forEach(i => {
        apps.push({
            name: i.module,
            entry: isDev ? i.devEntry : i.depEntry,
            container: `#subapp-viewport-${i.module}`,
            activeRule: i.routerBase,
            props: {
                ...props,
                routes: i.data,
                routerBase: i.routerBase,
            },
        });
        if (i.defaultRegister) defaultApp = i.routerBase;
    });
    registerMicroApps(apps);
    // 设置默认进入的子应用 需要进入的子应用路由前缀
    console.log(defaultApp, 39);
    setDefaultMountApp(defaultApp + '/');
    // 启动微前端
    start({
        prefetch: 'all',
        singular: false,
    });
    // 启动qiankun应用间通信机制
    appStore(initGlobalState);
};

export default qianKunStart;

// 用于加载需要token的应用
export const qkAppStart = menus => {
    console.log(123, 54);
    let apps = []; // 子应用数组盒子
    let isProd = ['production', 'prod'].includes(process.env.NODE_ENV); // 根据开发环境|线上环境加载不同entry
    menus.forEach(i => {
        apps.push({
            name: i.module,
            entry: isProd ? i.dep_entry : i.dev_entry,
            container: `#subapp-viewport-${i.module}`,
            activeRule: i.routerBase,
            props: {
                ...props,
                routes: i.children,
                routerBase: i.routerBase,
            },
        });
    });
    console.log(apps);
    registerMicroApps(apps);
    setDefaultMountApp('/dashboard');
    appStore(initGlobalState);
    start({
        prefetch: 'all',
        singular: false,
    });
};
