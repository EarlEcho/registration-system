<template>
    <div class="exam-detail-content-w">
        <my-header></my-header>

        <el-breadcrumb separator-class="el-icon-arrow-right" style="position: relative;left: 5%;top: 60px;width: 80%">
            <el-breadcrumb-item :to="{ path: '/home' }">考试列表</el-breadcrumb-item>
            <el-breadcrumb-item>{{examInfos.examName}}</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="exam-detail-w">
            <h1>{{examInfos.examName}}</h1>

            <p class="exam-detail-notice">
                &emsp;&emsp;{{examInfos.examNotice}}
            </p>
            <p>报名时间：{{examInfos.applyStart | time}}——{{examInfos.applyEnd | time}}</p>
            <p>考试时间：{{examInfos.examStart | time}}——{{examInfos.examEnd | time}}</p>

            <p>报名状态：{{examInfos.status}}</p>

            <p>考试地点：{{examInfos.examLocation}}</p>
            <p>报名费用：{{examInfos.payMoney}}元</p>

            <div class="enroll-btn">
                <router-link :to="'/exam-enroll?id='+ examId">
                    <el-button type="primary" :disabled="!showEnrollBtn">我要报名</el-button>
                </router-link>
            </div>
        </div>


    </div>
</template>

<script>
    import MyHeader from '@/components/header'

    import functions from '@/functions/common.js'

    export default {
        name: '',
        components: {MyHeader},
        props: [],
        data() {
            return {
                showEnrollBtn: false,
                examId: '',
                userInfos: {
                    id: 1,
                    name: 'Echo'
                },
                examInfos: {},

                //用于判断是否报过名  true-可以报名  false-不能报名
            }
        },
        filters: {
            time(val) {
                return functions.timestampToLongText(val)
            }
        },
        mounted() {
            this.examId = this.$route.query.id
            functions.getAjax('/private/exam/findOne?id=' + this.examId, (res) => {
                this.examInfos = res.data;
                if (this.examInfos.status == '未开始' || this.examInfos.status == '已结束') {
                    this.showEnrollBtn = false;
                } else {
                    functions.getAjax('/private/apply/canApply?examId=' + this.examId, (res) => {
                        this.showEnrollBtn = res.data;
                        if(!res.data){
                            this.$notify({
                                title: '提示',
                                message: '您已经报考过该考试，不能重复报名！',
                                type: 'warning'
                            });
                        }

                    });
                }
            });
        }
    }
</script>
<style lang="less">

    .exam-detail-content-w {
        box-sizing: border-box;
        div {
            box-sizing: border-box;
        }

        .exam-detail-w {
            position: relative;
            top: 80px;
            background: white;
            width: 85%;
            margin: 0 auto;
            border-radius: 10px;
            padding: 40px 50px;
            box-sizing: border-box;
            .exam-detail-notice {
                width: 90%;
                margin: 0 auto;
                color: #8c939d;
                line-height: 26px;
                padding-bottom: 20px;

            }
            h1 {
                text-align: center;
                font-size: 32px;
                font-weight: normal;
                margin-bottom: 30px;
            }
            p {
                line-height: 40px;
            }
        }

        .enroll-btn {
            text-align: center;
            padding-top: 30px;
            .el-button {
                width: 250px;
            }

        }
    }
</style>
