<template>
    <div class="index-w">
        <div class="index-content-w">
            <el-form :inline="true" :model="searchForm" class="search-w">
                <el-form-item>
                    <el-input v-model="searchForm.name" placeholder="输入考试名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="searchForm.status" placeholder="选择考试状态">
                        <el-option label="未开始报名" value="0"></el-option>
                        <el-option label="已开始报名" value="1"></el-option>
                        <el-option label="已结束报名" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="searchEvent">查询</el-button>
                    <el-button type="primary" @click.native="resetForm">重置</el-button>
                </el-form-item>
            </el-form>

            <!--考试列表-->
            <el-table :data="examList" :stripe="true">
                <el-table-column prop="name" label="考试名称"></el-table-column>
                <el-table-column prop="status" label="考试状态"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button @click.native.prevent="enrollEvent(scope.$index)"
                                   type="primary"
                                   size="small">
                            报名
                        </el-button>
                    </template>
                </el-table-column>

            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        props: [],
        data() {
            return {
                userInfos: {
                    id: 1,
                    name: 'Echo'
                },
                searchForm: {
                    name: '',
                    status: ''
                },
                examList: [{
                    id: 1,
                    name: '2017年度全国大学生英语4级考试',
                    status: '已开始报名'
                }, {
                    id: 2,
                    name: '2017年度全国大学生英语6级考试',
                    status: '已开始报名'
                }]
            }
        },
        methods: {
            searchEvent() {

            },
            resetForm(formName) {
                this.searchForm = {
                    name: '',
                    status: ''
                }
            },
            enrollEvent() {
                this.$router.push('/exam-detail');
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
            width: 90%;
            margin: 20px auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            .search-w {
                margin-bottom: 10px;
            }
        }
    }


</style>
