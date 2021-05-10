/*
 * @Author: hongdong.liao
 * @Date: 2021-05-07 16:55:01
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-07 16:56:45
 * @FilePath: /microDemo/demo-web/demo-web-main/src/core/install.js
 */
import Vue from 'vue';
// 注册图片放大组件
import Viewer from 'v-viewer';
import 'viewerjs/dist/viewer.css';
Vue.use(Viewer, { defaultOptions: { zIndex: 9999, }, });
