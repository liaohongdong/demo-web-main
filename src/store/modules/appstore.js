/*
 * @Author: hongdong.liao
 * @Date: 2021-01-11 14:58:39
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-10 15:08:27
 * @FilePath: /microDemo/demo-web/demo-web-main/src/store/modules/appstore.js
 */
// 一些系统信息
export default {
    namespaced: true,
    state: {
        currentApplication: 'login',
        message: '',
        token: '',
    },
    mutations: {
        // 设置父应用信息
        SET_MESSAGE_VALUE(state, data) {
            state.message = data;
        },
        // 设置当前显示的子应用
        SET_CURRENT_APPLICATION(state, data) {
            state.currentApplication = data;
        },
        // 设置token
        SET_TOKEN(state, data) {
            state.token = data;
        },
        CLEAR_ALL: state => {
            state.currentApplication = 'login';
            state.message = '';
            state.token = '';
        },
    },
    actions: {
        setMessage({ commit, }, data) {
            commit('SET_MESSAGE_VALUE', data);
        },
        setAppName({ commit, }, data) {
            commit('SET_CURRENT_APPLICATION', data);
        },
        setToken({ commit, }, data) {
            commit('SET_TOKEN', data);
        },
        clearAll({ commit, }) {
            commit('CLEAR_ALL');
        },
    },
};
