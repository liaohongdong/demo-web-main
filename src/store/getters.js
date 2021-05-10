/*
 * @Author: hongdong.liao
 * @Date: 2021-01-05 19:51:24
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-07 18:07:51
 * @FilePath: /microDemo/demo-web/demo-web-main/src/store/getters.js
 */
const getters = {
    token: state => state.appstore.token,
    message: state => state.appstore.message,
    currentApplication: state => state.appstore.currentApplication,
};

export default getters;
