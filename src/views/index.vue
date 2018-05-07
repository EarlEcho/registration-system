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
                <el-table-column prop="examName" label="考试名称" show-overflow-tooltip></el-table-column>
                <el-table-column prop="applyStart" label="报名开始时间" show-overflow-tooltip>
                    <template slot-scope="scope">
                        {{scope.row.applyStart | toTime}}
                    </template>
                </el-table-column>
                <el-table-column prop="examStart" label="考试开始时间" show-overflow-tooltip>
                    <template slot-scope="scope">
                        {{scope.row.examStart | toTime}}
                    </template>
                </el-table-column>
                <el-table-column prop="payMoney" label="考试费用"></el-table-column>
                <el-table-column prop="status" label="考试状态"></el-table-column>
                <el-table-column label="操作" width="220">
                    <template slot-scope="scope">
                        <el-button @click.native.prevent="enrollEvent(scope.row)"
                                   type="primary"
                                   size="small">查看详情
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination-block-w">
                <el-pagination layout="total,prev, pager, next" :total="pager.totalElements" :size="pager.size"
                               @current-change="pageChange">
                </el-pagination>
            </div>

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
                pager: {},
                searchForm: {
                    name: '',
                    // status: ''
                },
                examList: []
            }
        },
        mounted() {
            this.fetchData();
        },
        filters: {
            toTime(value) {
                return functions.timestampToLongText(value);
            }
        },
        methods: {
            //获取数据
            fetchData() {
                functions.getAjax('/private/exam/findAll' + '?pageNum=0&examName=' + this.searchForm.name, (res) => {
                    this.examList = res.data.content;
                    this.pager = {
                        size: res.data.size,
                        totalElements: res.data.totalElements,
                        numberOfElements: res.data.numberOfElements
                    }
                });
            },

            searchEvent() {
                functions.getAjax('/private/exam/findAll' + '?pageNum=0&examName=' + this.searchForm.name, (res) => {
                    this.examList = res.data.content;
                });
            },
            pageChange(page) {
                let currentPage = parseInt(page - 1);
                functions.getAjax('/private/exam/findAll' + '?pageNum=' + currentPage+ '&examName=' + this.searchForm.name, (res) => {
                    this.examList = res.data.content;
                    this.pager = {
                        size: res.data.size,
                        totalElements: res.data.totalElements,
                        numberOfElements: res.data.numberOfElements
                    }
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
            width: 80%;
            vertical-align: top;
            .search-w {
                margin-bottom: 10px;
            }
        }
    }


</style>
