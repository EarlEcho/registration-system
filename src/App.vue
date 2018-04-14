<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>

    import functions from '@/functions/common.js'

    export default {
        name: 'App',
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
            /*if (window.location.hash == '#/sing-up' || window.location.hash == '#/sing-in') {
                this.showHeader = false;
            } else {

                /!*获取当前登录用户的ID*!/
                // let userId = this.$route.query.id;
                functions.getAjax('/regs/user/getOne', (res) => {
                    this.userInfos = res.data;
                    this.showHeader = true;
                });
            }*/
        }
    }
</script>

<style lang="less">
    @import 'assets/css/common.css';
    @import 'assets/css/ionicons.min.css';

    #app {
        position: absolute;
        width: 100%;
        min-height: 100%;
        background-color: #f5f5f5;
    }


    .module-content-w {
        width: 85%;
        margin: 20px auto;
        padding: 30px;
        background-color: white;
        border-radius: 10px;
    }

    .menu-content-w {
        padding: 30px;
        background-color: white;
        margin: 20px;
        position: absolute;
        border-radius: 10px;
        left: 200px;
        top:40px;
    }
</style>
