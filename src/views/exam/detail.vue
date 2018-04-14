<template>
    <div class="exam-detail-content-w module-content-w">
        <my-header></my-header>

        <h1>{{examInfos.examName}}</h1>
        <p>报名时间：{{examInfos.applyStart | time}}——{{examInfos.applyEnd | time}}</p>
        <p>考试时间：{{examInfos.examStart | time}}——{{examInfos.examEnd | time}}</p>
        <p>考试地点：{{examInfos.examLocation}}</p>
        <p>报名费用：{{examInfos.payMoney}}元</p>

        <div class="enroll-btn">
            <router-link :to="'/exam-enroll?id='+ examId">
                <el-button type="primary">我要报名</el-button>
            </router-link>
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
                examId: '',
                userInfos: {
                    id: 1,
                    name: 'Echo'
                },
                examInfos: {}
            }
        },
        filters: {
            time(val) {
                return functions.timestampToshortText(val)
            }
        },
        mounted() {
            this.examId = this.$route.query.id
            functions.getAjax('/regs/exam/findOne?id=' + this.examId, (res) => {
                this.examInfos = res.data;

            });
        },
        methods: {}
    }
</script>
<style lang="less">

    .exam-detail-content-w {
        h1 {
            text-align: center;
            font-size: 32px;
            font-weight: normal;
            margin-bottom: 30px;
        }
        p {
            line-height: 34px;
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
