<template>
    <div class="instruction-w">
        <my-header></my-header>
        <left-menu></left-menu>
        <div class="instruction-content-w menu-content-w">
            <h1>我的报名</h1>
            <el-form :inline="true" :model="searchForm" class="search-w">
                <el-form-item>
                    <el-input v-model="searchForm.name" placeholder="输入考试名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="searchEvent">查询</el-button>
                    <el-button type="primary" @click.native="resetForm">重置</el-button>
                </el-form-item>
            </el-form>
            <el-table :data="examList" :stripe="true">
                <el-table-column prop="examInfo.examName" label="考试名称" show-overflow-tooltip></el-table-column>
                <el-table-column prop="realName" label="姓名"></el-table-column>

                <el-table-column prop="createTime" label="报名时间">
                    <template slot-scope="scope">
                        {{scope.row.applyTime | toTime}}
                    </template>
                </el-table-column>

                <el-table-column label="考试开始时间">
                    <template slot-scope="scope">
                        {{scope.row.examInfo.examStart | toTime}}
                    </template>
                </el-table-column>

            </el-table>
        </div>

    </div>
</template>

<script>
    import MyHeader from '@/components/header'
    import functions from '@/functions/common.js'
    import LeftMenu from '@/components/leftMenu'

    export default {
        name: '',
        components: {LeftMenu, MyHeader},
        props: [],
        data() {
            return {
                isCollapse: false,
                instruction: {},
                examList: [{}],
                searchForm: {
                    name: '',
                    // status: ''
                },
            }
        },
        methods: {
            fetchData() {
                functions.getAjax('/private/user/pageUserApplyInfo', (res) => {
                    this.examList = res.data.content;
                });
            },
            searchEvent() {
                functions.getAjax('/private/user/pageUserApplyInfo' + '?pageNum=0&examName=' + this.searchForm.name, (res) => {
                    this.examList = res.data.content;
                });
            },
            resetForm(formName) {
                this.$router.go(0);
            },
        },
        mounted() {
            this.fetchData();
        },
        filters: {
            toTime(value) {
                return functions.timestampToLongText(value);
            }
        },
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
