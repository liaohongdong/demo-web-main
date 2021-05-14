/*
 * @Author: hongdong.liao
 * @Date: 2021-05-12 16:00:33
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-13 15:43:12
 * @FilePath: /microDemo/demo-web/demo-web-main/src/api/user.js
 */
import { BasicHTTP as http, } from '@/api/http';

export const getMenus = params => http.get('/user/menus', params);
