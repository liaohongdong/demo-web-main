/*
 * @Author: hongdong.liao
 * @Date: 2021-01-05 19:51:29
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-10 15:07:00
 * @FilePath: /microDemo/demo-web/demo-web-main/src/utils/app-store.js
 */
import store from '@/store';

// qiankun应用间通信
const appStore = initGlobalState => {
    /**
   * @name 初始化数据内容
   */
    const { onGlobalStateChange, setGlobalState, } = initGlobalState({
        message: '',
        token: '',
        appsRefresh: '',
        currentApplication: '',
    });

    // 监听数据变动 监听到数据发生改变后的回调 将监听到的数据存入vuex
    onGlobalStateChange(value => {
        value.token && store.dispatch('app/setToken', value.token);
        value.appsRefresh && window?.location?.reload?.();
    });

    // 改变数据并通知所有应用
    setGlobalState({
        message: 'micro-web-main',
    });
};

export default appStore;
