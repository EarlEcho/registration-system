<template>
    <div class="instruction-w">
        <my-header></my-header>

        <left-menu></left-menu>
        <div class="instruction-content-w menu-content-w">
            <h1>通知公告</h1>
            <p>{{notice.announceInfo}}</p>
        </div>

    </div>
</template>

<script>
    import MyHeader from '@/components/header'

    import LeftMenu from '@/components/leftMenu'
    import functions from '@/functions/common.js'

    export default {
        name: '',
        components: {LeftMenu, MyHeader},
        props: [],
        data() {
            return {
                notice:{

                }
            }
        },
        mounted() {
            functions.getAjax('/announce/get', (res) => {
                if(res.code==500){
                    return;
                }else{
                    this.notice = {
                        id: res.data.id,
                        announceInfo: res.data.announceInfo
                    };
                }

            });
        }
    }
</script>
<style lang="less">
    .instruction-w {
        .instruction-content-w {
            display: inline-block;
            width: 75%;
            vertical-align: top;

            h1 {
                font-size: 28px;
                font-weight: normal;
                margin-bottom: 30px;
            }
            p {
                line-height: 30px;
                margin-bottom: 15px;
            }
        }

    }
</style>
