<!--
 * @Author: hongdong.liao
 * @Date: 2021-02-01 18:18:14
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-13 18:55:22
 * @FilePath: /microDemo/demo-web/demo-web-main/src/views/dashboard/Dashboard.vue
-->
<template>
    <div>
        这里是dashboard 当前应用: {{$store.getters.currentApplication}}接受消息：{{$store.getters.message}}
    </div>
</template>
<script>
import { mapActions, } from 'vuex';

export default {
    name: 'Dashboard',
    mounted() {
        this.setAppName('dashboard');
        this.setMessage('dashboard 发送了消息');
    },
    methods: {
        ...mapActions('appstore', [
            'setAppName',
            'setMessage'
        ]),
    },
};
</script>