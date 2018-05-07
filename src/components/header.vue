<template>
    <div class="user-header-infos">
        <span>{{userInfos.username}}</span>&emsp;欢迎登录&emsp;&emsp;
        <el-button type="text" @click="logOut">
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
            functions.getAjax('/private/user/getOne', (res) => {
                console.log(res)
                if (res.code !== 200) {
                    this.$notify({
                        title: '提示',
                        message: res.msg,
                        type: 'warning'
                    });
                    /* setTimeout(() => {
                         this.$router.replace('/')
                     }, 3000)*/
                } else {
                    this.userInfos = res.data;

                }
            });
        },
        methods: {
            logOut() {
                functions.getAjax('/private/user/logout', (res) => {
                    if (res.code == 200) {
                        this.$notify({
                            title: '提示',
                            message: '注销登陆成功,即将返回登录页。',
                            type: 'success'
                        });
                        localStorage.setItem('sid', '');
                        setTimeout(() => {
                            this.$router.replace('/')
                        }, 1500)
                    } else {
                        this.$notify({
                            title: '提示',
                            message: res.msg,
                            type: 'warning'
                        });
                    }
                });
            }
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
