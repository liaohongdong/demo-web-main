<!--
 * @Author: hongdong.liao
 * @Date: 2021-05-07 14:59:55
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-13 17:12:20
 * @FilePath: /microDemo/demo-web/demo-web-main/src/App.vue
-->
<template>
    <div id="root" class="root-container">
        <!-- 有 Token 进入子应用视图 -->
        <template v-if="hasToken">
            <!-- 左侧菜单区 -->
            <Sidebar id="sidebar-container" class="sidebar-container"/>
            <!-- 右侧视图 -->
            <div class="container-panel">
                <div class="main-container-content">
                    <!-- 上部导航区 -->
                    <!-- <Nav /> -->
                    <!-- 子应用渲染区 -->
                    <div class="main-container-view">
                        <el-scrollbar class="main-scroll">
                            <router-view></router-view>
                            <div v-for="subapp in subappList" :id="subapp.key" :key="subapp.key" v-show="$route.path.startsWith(`/${subapp.pathPrefix}`)"></div>
                        </el-scrollbar>
                    </div>
                </div>
            </div>
        </template>
        <!-- 没有 Token 进入登录视图 -->
        <div
            v-else
            id="subapp-viewport-login"
            v-show="$route.path.startsWith('/login/')"
        ></div>
    </div>
</template>

<script>
import Sidebar from '@/components/sidebar';
// import Nav from '@/components/nav/Nav.vue';
import defaultSettings from '@/settings';

export default {
    name: 'mainView',
    components: {
        Sidebar,
        // Nav,
    },
    computed: {
        hasToken() {
            return !!this.$store.getters.token;
        },
        subappList() {
            return Object.keys(defaultSettings.MENUS).map(key => ({
                key: `${defaultSettings.SUB_APP_PREFIX}-${key}`,
                pathPrefix: key,
            }));
        },
    },
};
</script>

<style lang="scss">
html,
body {
    margin: 0;
    padding: 0;
    height: 100%;
}
.root-container {
    display: flex;
    width: 100%;
    height: 100%;
}
.container-panel {
    position: relative;
    flex: 1;
    height: 100vh;
    display: flex;
    flex-flow: column;
    overflow-x: overlay;
    overflow-y: hidden;
    .main-container-content {
        flex: 1;
        display: flex;
        flex-flow: column;
        height: 100%;
        overflow-x: overlay;
        overflow-y: hidden;
        min-width: calc(1280px - 200px);
        .main-container-view {
            background: #fff;
            box-sizing: border-box;
            overflow-y: overlay;
            height: 100%;
            .main-scroll {
                width: 100%;
                height: 100%;
                background: #fff;
                border-radius: 4px;
                .el-scrollbar__wrap {
                    overflow-x: hidden;
                }
            }
        }
    }
}
[id^='subapp-viewport'] {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    [id^='__qiankun_microapp_wrapper_'] {
        height: 100%;
    }
}
</style>