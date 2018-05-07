<template>
    <div class="index-menu-w">
        <el-menu :router="true" class="el-menu-vertical-demo"
                 :collapse="isCollapse">
            <el-menu-item index="/home">
                <i class="el-icon-star-on"></i>
                <span slot="title">首页</span>
            </el-menu-item>

            <el-menu-item index="/my-exam">
                <i class="el-icon-circle-check-outline"></i>
                <span slot="title">我的报名</span>
            </el-menu-item>
            <el-menu-item index="/instruction">
                <i class="el-icon-document"></i>
                <span slot="title">通知公告</span>
            </el-menu-item>
            <el-menu-item index="/my">
                <i class="el-icon-setting"></i>
                <span slot="title">个人中心</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        props: [],
        data() {
            return {
                isCollapse: false,
            }
        },
        methods: {}
    }
</script>
<style lang="less">
    .index-menu-w {
        position: fixed;
        top: 40px;
        width: 200px;
        height: 100%;
        display: inline-block;
        background-color: white;
        .el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 200px;
            min-height: 400px;
        }
    }
</style>
