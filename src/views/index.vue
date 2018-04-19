<template>
    <div class="index-w">
        <my-header></my-header>
        <left-menu></left-menu>
        <div class="index-content-w menu-content-w">
            <el-form :inline="true" :model="searchForm" class="search-w">
                <el-form-item>
                    <el-input v-model="searchForm.name" placeholder="输入考试名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="searchEvent">查询</el-button>
                    <el-button type="primary" @click.native="resetForm">重置</el-button>
                </el-form-item>
            </el-form>

            <!--考试列表-->
            <el-table :data="examList" :stripe="true">
                <el-table-column prop="examName" label="考试名称"></el-table-column>
                <el-table-column prop="status" label="考试状态"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button @click.native.prevent="enrollEvent(scope.row)"
                                   type="primary"
                                   size="small">查看详情
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    import LeftMenu from '@/components/leftMenu'
    import MyHeader from '@/components/header'
    import functions from '@/functions/common.js'

    export default {
        name: '',
        components: {LeftMenu, MyHeader},
        props: [],
        data() {
            return {

                searchForm: {
                    name: '',
                    // status: ''
                },
                examList: [{
                    examName: '2018年度全国大学生英语四级考试（CTE-4）',
                    status: '已结束报名'
                },{
                    examName: '2018年度全国大学生英语六级考试（CTE-6',
                    status: '已结束报名'
                },{
                    examName: '2018年度蓝桥杯创新科技大赛',
                    status: '已开始报名'
                }]
            }
        },
        mounted() {
            s
        },
        methods: {
            searchEvent() {
                functions.getAjax('/regs/exam/findAll' + '?pageNum=0&examName=' + this.searchForm.name, (res) => {
                    console.log(res);
                    this.examList = res.data.content;
                });
            },
            resetForm(formName) {
                this.$router.go(0);
            },
            enrollEvent(row) {
                this.$router.push('/exam-detail?id=' + row.id);
            }

        }
    }
</script>
<style lang="less">
    .index-w {
        position: absolute;
        width: 100%;
        min-height: 100%;
        background: #f5f5f5;
        .index-content-w {
            display: inline-block;
            width: 75%;
            vertical-align: top;
            .search-w {
                margin-bottom: 10px;
            }
        }
    }


</style>
