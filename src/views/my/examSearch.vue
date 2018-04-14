<template>
    <div class="instruction-w">
        <my-header></my-header>
        <left-menu></left-menu>
        <div class="instruction-content-w menu-content-w">
            <h1>成绩查询</h1>
            <!--<el-form :inline="true" :model="searchForm" class="search-w">-->
            <!--<el-form-item>-->
            <!--<el-input v-model="searchForm.name" placeholder="输入考试名称"></el-input>-->
            <!--</el-form-item>-->
            <!--<el-form-item>-->
            <!--<el-select v-model="searchForm.status" placeholder="选择考试状态">-->
            <!--<el-option label="未开始报名" value="0"></el-option>-->
            <!--<el-option label="已开始报名" value="1"></el-option>-->
            <!--<el-option label="已结束报名" value="2"></el-option>-->
            <!--</el-select>-->
            <!--</el-form-item>-->
            <!--<el-form-item>-->
            <!--<el-button type="primary" @click="searchEvent">查询</el-button>-->
            <!--<el-button type="primary" @click.native="resetForm">重置</el-button>-->
            <!--</el-form-item>-->
            <!--</el-form>-->
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
