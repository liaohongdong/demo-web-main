<!--
 * @Author: hongdong.liao
 * @Date: 2021-05-12 12:20:12
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-13 17:37:48
 * @FilePath: /microDemo/demo-web/demo-web-main/src/components/sidebar/index.vue
-->
<template>
    <div
        class="sidebar"
        :class="{ open: false}"
    >
        <div class="fixed-section">
            <el-scrollbar class="scrollbar" wrap-class="scrollbar-wrapper">
                <el-menu unique-opened mode="vertical">
                    <el-menu-item
                        :class="[
                            'menu-item--wrapper',
                        ]"
                        @click="goto(dashboard.path, '')"
                    >
                        <div class="item">
                            <i class="iconfont icon-sidebar-dashboard"></i>
                            <span slot="title">{{ dashboard.title }}</span>
                        </div>
                    </el-menu-item>
                    <template v-for="item in menus">
                        <!-- Only show popover when active menu isn't self  -->
                        <el-popover
                            placement="right-start"
                            transition=""
                            trigger="hover"
                            :key="item.id"
                            :close-delay="50"
                            :open-delay="0"
                            v-if="item.children && item.children.length"
                        >
                            <el-cascader-panel
                                popper-class="popper-wrapper"
                                :options="item.children"
                                @change="handlePanelChange"
                                :props="{
                                    value: 'url',
                                    label: 'name',
                                    expandTrigger: 'hover',
                                }"
                                :ref="`cascadeNo${item.id}`"
                                :clearable="true"
                            >
                            </el-cascader-panel>
                            <el-menu-item
                                slot="reference"
                                :index="`${item.id}`"
                                :class="[
                                    'menu-item--wrapper',
                                ]"
                                @click="handleMenuClick(item)"
                            >
                                <div class="item">
                                    <i :class="item.icon"></i>
                                    <span slot="title">{{ item.name }}</span>
                                </div>
                            </el-menu-item>
                        </el-popover>
                        <el-menu-item
                            v-else
                            :key="item.id"
                            :index="`${item.id}`"
                            :class="[
                                'menu-item--wrapper',
                                computedPopoverClass(item),
                            ]"
                            @click="handleMenuClick(item)"
                        >
                            <div class="item">
                                <i :class="item.icon"></i>
                                <span slot="title">{{ item.name }}</span>
                            </div>
                        </el-menu-item>
                    </template>
                </el-menu>
            </el-scrollbar>
        </div>
    </div>
</template>

<script>
import { getMenus, } from '@/api/user';
import defaultSettings from '@/settings';
import { routerGo, } from '@fe-micro/micro-core'; // 引入跨应用路由跳转
import { qkAppStart, } from '@/core/app-register';

export default {
    data() {
        return {
            menus: [],
            dashboard: defaultSettings.dashboard,
        };
    },
    mounted() {
        getMenus().then(resp => {
            this.menus = resp;
            qkAppStart(resp);
        });
    },
    methods: {
        handlePanelChange(arr) {
            console.log(arr, 106);
            // 级联面板选择 取最后一级的url
            const orientationUrl = arr[arr.length - 1];
            console.log(orientationUrl, 111);
            routerGo(orientationUrl);
        },
        goto(path) {
            console.log(path);
            this.$router.push({
                path,
            });
        },
        handleMenuClick(menu) {
            const { url, } = menu;
            console.log(url, 111);
            routerGo(url); // 跳转
        },
    },
};
</script>
<style lang="scss" scope>
$white: #fff;
$menu-item-font-color: rgba(157, 153, 176, 1);
$sideBarSecondaryPurple: #9d99b0;
$sidebarBgColor: #1e1e27; // 侧边栏背景颜色
$iconColor: #aeaeb0; // 侧边栏图标颜色
$iconHighlightColor: $white; // 侧边栏高亮颜色
$selectedBlue: rgba(236, 245, 255, 1); // 侧边栏选中字体颜色
$menuGap: 16px;
$collapseSidebarWidth: 60px;
$sidebarWidth: 200px;
$fontSizeNormal: 14px;
$secondaryBlack: #606266;
$sidebarChildrenMenuWidth: 140px;
$fontWeightBold: 800;
$fontSizeLarge: 14px;
$primaryBlack: #303133;
$fontSize18: 18px;
$primaryColor: #3377FF;
$fontSizeSmall: 12px;
.sidebar {
    width: $collapseSidebarWidth;
    height: 100%;
    display: flex;
    flex-direction: inherit;
    justify-content: space-between;
    transition: width 0.3s;
    box-sizing: border-box;
    user-select: none;
    background: #f0f2f5;

    &.open {
        width: $sidebarWidth;
    }

    .fixed-section {
        display: flex;
        flex-direction: column;
        z-index: 100;
        width: 60px;
        height: 100%;
        background-color: $sidebarBgColor;
        .scrollbar {
            height: calc(100% - 68px - 50px);
            /deep/ {
                .el-menu {
                    background: transparent;
                }
            }
        }
        .menu-item--wrapper {
            height: auto;
            line-height: 13px;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0px !important; // need overwrite this line to cover the effect of element-ui
            color: $menu-item-font-color;
            background: $sidebarBgColor;
            .item {
                display: flex;
                flex-direction: column;
                align-items: center;
                color: $iconColor;
                font-size: $fontSizeNormal;
                i {
                    font-size: 24px;
                    color: $iconColor;
                }
                i,
                span {
                    display: block;
                }
                span {
                    margin-top: 6px;
                }
            }
            &.selected {
                background: #000000;
                .item {
                    color: $iconHighlightColor;
                    i {
                        color: $iconHighlightColor;
                    }
                }
            }
            &:hover:not(.selected) {
                background: #000000;
                color: $white;
                .item {
                    color: $white;
                    i {
                        color: $white;
                    }
                }
            }
            .menu-sub-item-content {
                color: $secondaryBlack;
            }
        }

        .bottom-section {
            height: 50px;
            .collapse-wrapper {
                position: relative;
                padding-top: 16px;
                text-align: center;
                padding-bottom: 16px;
                color: $iconColor;
                .el-icon-s-unfold,
                .el-icon-s-fold {
                    font-size: 18px;
                    display: block;
                    cursor: pointer;
                }
                &::before {
                    content: ' ';
                    position: absolute;
                    top: 0px;
                    left: calc(50% - 14px);
                    width: 28px;
                    height: 1px;
                    background: #484850;
                }
            }
        }
    }

    .menu-items-wrapper {
        max-width: $sidebarChildrenMenuWidth;
        height: 100%;
        transition: all 0.3s linear;
        background-color: #f0f2f5;
        width: 0px;
        &.show {
            visibility: visible;
            z-index: 99;
            width: $sidebarChildrenMenuWidth;
        }
        .inner {
            height: 100vh;
            display: flex;
            flex-direction: column;
            visibility: hidden;
            transition: all 0.3s linear;
            width: 0;
            width: $sidebarChildrenMenuWidth;
            transform: translate3d(-100%, 0, 0);
            &.show {
                visibility: visible;
                width: $sidebarChildrenMenuWidth;
                transform: translate3d(0, 0, 0);
            }
            .menu-title {
                flex-shrink: 0;
                padding: 24px;
                display: flex;
                position: relative;
                padding-left: $menuGap;
                font-weight: $fontWeightBold;
                font-size: $fontSizeLarge;
                color: $primaryBlack;
                .custom-icon {
                    cursor: pointer;
                    font-weight: normal;
                    position: absolute;
                    left: 54px;
                }
            }
            .children-scrollbar--wrapper {
                flex: 1;
                overflow-x: hidden;
                background-color: transparent;
                resize: none;
                // height: calc(100% - 69px);
                // max-height: calc(100% - 69px);
                // fix scrollbar visible issue
                .el-scrollbar__wrap {
                    margin-right: 0px !important; // use !important fix the side effect
                }
                .el-scrollbar__wrap::-webkit-scrollbar {
                    display: none;
                }
                .el-menu-item:focus:not(.selected),
                .el-menu-item:hover:not(.selected) {
                    background-color: transparent; // clear ui library's side effect
                }
                .el-scrollbar__bar.is-horizontal,
                .el-scrollbar__bar.is-vertical {
                    display: none;
                }
            }
            .children-wrapper {
                box-sizing: border-box;
                .el-menu-item-group {
                    margin-bottom: 16px;
                    .el-submenu {
                        .el-menu-item {
                            padding-left: 30px !important; // second menu item
                        }
                    }
                }
                .el-submenu__title {
                    padding: 7px 0px 7px 10px;
                    padding-left: $menuGap !important; //去除menu-item的副作用
                    height: auto !important; //去除menu-item的副作用
                    line-height: $fontSize18 !important; //去除menu-item的副作用
                    font-size: $fontSizeNormal;
                    border-radius: 4px;
                    &:hover {
                        background-color: transparent;
                        color: $primaryColor;
                    }
                    .el-submenu__icon-arrow {
                        right: 4px;
                    }
                }
                .el-menu-item-group__title {
                    font-size: $fontSizeSmall;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    padding: 0px 0px 4px 16px !important; // use important overwrite the side effect
                }
                .menu-item-content {
                    padding: 7px 0px 7px 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    padding-left: $menuGap !important; //去除menu-item的副作用
                    height: auto !important; //去除menu-item的副作用
                    line-height: $fontSize18 !important; //去除menu-item的副作用
                    min-width: 0px; //去除menu-item的副作用
                    font-weight: 400;
                    font-size: $fontSizeNormal;
                    color: $primaryBlack;
                    cursor: pointer;
                    border-radius: 4px;
                    &.selected {
                        position: relative;
                        border-radius: 4px;
                        color: $primaryColor;
                        &::after {
                            position: absolute;
                            content: '';
                            right: 0;
                            top: 50%;
                            margin-top: -6px;
                            width: 4px;
                            height: 12px;
                            background: $primaryColor;
                        }
                        // background-color: $selectedBlue;
                    }
                    &:hover,
                    &:focus {
                        background-color: transparent;
                    }
                    &:hover:not(.selected) {
                        color: $primaryColor;
                        background-color: transparent;
                    }
                }
                .menu-sub-item-content {
                    color: $secondaryBlack;
                }
            }
        }
    }
}

.menu-item-hover--wrapper {
    width: auto;
    padding: 0px !important;
    min-width: 0px !important;
    border-radius: 2px;
    margin-left: 0px !important; // clear the side effect of element-ui
    overflow: hidden; // keep border is radius
    // &.selected {
    //     display: none;
    // }
    .menu-item-hover--item {
        padding: 7px 0px;
        font-weight: 400;
        font-size: $fontSizeNormal;
        color: $primaryBlack;
        cursor: pointer;
        &.selected {
            color: $primaryColor;
        }
        &:hover:not(.selected) {
            color: $primaryColor;
        }
        .right-icon {
            float: right;
        }
    }

    .el-cascader-panel {
        min-width: 0px !important;
        border: none !important; // hack the original border
        .el-cascader-menu
            .el-scrollbar__wrap
            .el-cascader-menu__list
            .in-active-path {
            color: $primaryBlack;
            font-weight: 500;
            &:hover {
                color: $primaryColor;
            }
        }
        .el-cascader-menu__wrap.el-scrollbar__wrap {
            overflow: hidden;
            height: 100% !important;
            margin-right: 0px !important;
            margin-bottom: 0px !important;
            padding-left: 14px;
            padding-right: 14px;
            // offset the position of right arrow
            .el-cascader-menu__list .el-cascader-node .el-icon-arrow-right {
                right: -10px;
            }
            // margin-bottom: 120px !important; // use !important clear side effect
            .el-icon-check {
                display: none;
            }
        }
        .el-cascader-menu {
            height: auto;
            min-width: 0px !important;
            overflow-x: hidden;
            .el-scrollbar__bar {
                display: none;
            }
            .el-cascader-node {
                display: block;
                min-width: 92px;
                padding: 0px;
                height: 32px;
                box-sizing: border-box;
                line-height: 32px;
                &:hover,
                &:focus {
                    color: $primaryColor;
                    background-color: transparent;
                }
                .el-cascader-node__postfix {
                    line-height: 32px;
                }
            }
            .el-cascader-node__label {
                display: inline-block;
                flex: 0;
                font-size: $fontSizeNormal;
                line-height: 32px;
                padding: 0px;
            }
        }
    }
}
.scrollbar-wrapper {
    scrollbar-width: none;
    -ms-overflow-style: none;
    overflow-x: hidden;
}
</style>
