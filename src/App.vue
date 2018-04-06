<template>
    <div id="app">
        <div class="user-header-infos">
            <span>{{userInfos.name}}</span>&emsp;欢迎登录&emsp;&emsp;
            <el-button type="text">
                <i class="icon ion-power"></i>&nbsp;&nbsp;注销登录&emsp;&emsp;
            </el-button>
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {},
        props: [],
        data() {
            return {
                userInfos: {
                    id: 1,
                    name: 'Echo'
                }
            }
        },
    }
</script>

<style lang="less">
    @import 'assets/css/common.css';
    @import 'assets/css/ionicons.min.css';
    #app{
        position: absolute;
        width: 100%;
        min-height: 100%;
        background-color: #f5f5f5;
    }
    .user-header-infos {
        font-size: 14px;
        width: 100%;
        background: #409EFF;
        text-align: right;
        span {
            color: white;
        }
    }
    .module-content-w{
        width: 85%;
        margin: 20px auto;
        padding: 30px;
        background-color: white;
        border-radius: 10px;
    }
</style>
