/*
 * @Author: hongdong.liao
 * @Date: 2021-05-07 17:35:35
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-07 17:37:51
 * @FilePath: /microDemo/demo-web/demo-web-main/src/core/auth.js
 */
import store from '../store';
import { LocalStorage, } from '@fe-micro/micro-util';
import qianKunStart from './app-register';
import defaultSettings from '@/settings';

const microAppStart = () => {
    const token = LocalStorage.getToken();
    if (token) {
        store.dispatch('appstore/setToken', token);
        return;
    }
    qianKunStart(defaultSettings.noAuthApp);
};

export default microAppStart;
