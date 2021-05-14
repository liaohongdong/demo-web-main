/*
 * @Author: hongdong.liao
 * @Date: 2021-05-07 14:59:55
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-14 09:19:07
 * @FilePath: /microDemo/demo-web/demo-web-main/src/router/index.js
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/login/',
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
            i18n: 'dashboard',
        },
        component: () => import(/* webpackChunkName: "dashboard" */'@/views/dashboard/Dashboard.vue'),
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    const { name, meta, fullPath, } = to;
    console.log(name, meta, fullPath);
    // 所有的路由跳转都要经过这里
    // 拦截路由跳转做 tagList 也就是导航栏页签
    next();
});

export default router;
