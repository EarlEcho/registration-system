<template>
    <div class="instruction-w">
        <my-header></my-header>
        <left-menu></left-menu>
        <div class="instruction-content-w menu-content-w">
            <h1>收藏列表</h1>

        </div>
    </div>
</template>

<script>
    import MyHeader from '@/components/header'

    import LeftMenu from '@/components/leftMenu'

    export default {
        name: '',
        components: {LeftMenu, MyHeader},
        props: [],
        data() {
            return {
                isCollapse: false,
                searchForm: {
                    name: '',
                    status: ''
                },
            }
        },
        methods: {}
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
