<template>
    <div class="user-header-infos">
        <span>{{userInfos.username}}</span>&emsp;欢迎登录&emsp;&emsp;
        <el-button type="text">
            <i class="icon ion-power"></i>&nbsp;&nbsp;注销登录&emsp;&emsp;
        </el-button>
    </div>
</template>

<script>
    import functions from '@/functions/common.js'

    export default {
        name: '',
        components: {},
        props: [],
        data() {
            return {
                userInfos: {
                    id: 1,
                    username: 'Echo'
                },
            }
        },
        mounted() {
            functions.getAjax('/regs/user/getOne', (res) => {
                this.userInfos = res.data;
            });
        }
    }
</script>
<style lang="less">

    .user-header-infos {
        position: fixed;
        z-index: 3;
        font-size: 14px;
        width: 100%;
        background: #409EFF;
        text-align: right;
        span {
            color: white;
        }
    }
</style>
