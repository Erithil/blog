<template>
    <div id="navigation">
        <el-menu :collapse="isCollapse"
                 @close="handleClose"
                 @open="handleOpen"
                 active-text-color="#ffd04b"
                 background-color="#545c64"
                 class="el-menu-vertical-demo"
                 default-active="1-4-1"
                 text-color="#fff">
            <i @click="isCollapse=false" class="el-icon-caret-right" v-if="isCollapse"></i>
            <i @click="isCollapse=true" class="el-icon-caret-left" v-if="!isCollapse"></i>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-picture-outline"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Navigation",
        data() {
            return {
                isCollapse: true
            };
        },
        methods: {
            /*侧边导航栏开关控制*/
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
    }
</script>

<style lang="scss" scoped>

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 17rem;
        min-height: 100%;
    }

    .el-menu--collapse {
        width: 6rem;
        height: 100%;
    }

    .el-icon-caret-right,
    .el-icon-caret-left{
        padding: 1rem;
    }
</style>