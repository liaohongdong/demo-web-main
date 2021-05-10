/*
 * @Author: hongdong.liao
 * @Date: 2021-05-07 14:59:55
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-07 18:05:19
 * @FilePath: /microDemo/demo-web/demo-web-main/src/store/index.js
 */
import Vue from 'vue';
import Vuex from 'vuex';
import appstore from './modules/appstore';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        appstore
    },
    getters
});
