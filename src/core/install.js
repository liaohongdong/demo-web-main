/*
 * @Author: hongdong.liao
 * @Date: 2021-05-07 16:55:01
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-12 12:00:30
 * @FilePath: /microDemo/demo-web/demo-web-main/src/core/install.js
 */
import Vue from 'vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 注册图片放大组件
import Viewer from 'v-viewer';
import 'viewerjs/dist/viewer.css';
Vue.use(Viewer, { defaultOptions: { zIndex: 9999, }, });
