/*
 * @Author: hongdong.liao
 * @Date: 2021-05-07 16:06:06
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-10 15:08:00
 * @FilePath: /microDemo/demo-web/demo-web-main/src/core/render.js
 */
import Vue from 'vue';
import App from '../App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#main-app');

export default app;
