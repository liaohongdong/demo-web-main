/*
 * @Author: hongdong.liao
 * @Date: 2021-05-07 14:59:55
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-10 15:14:11
 * @FilePath: /microDemo/demo-web/demo-web-main/src/main.js
 */
// 注册第三方插件、样式，接入SDK等
import './core/install';

// 主应用 vue 实例化
import './core/render';

// 启动微服务
import microAppStart from './core/auth';
microAppStart();
