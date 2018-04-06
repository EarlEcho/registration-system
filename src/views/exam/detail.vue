<template>
    <div class="exam-detail-content-w module-content-w">
        <h1>{{examInfos.title}}</h1>
        <p>报名时间：{{examInfos.enrollTimeRange}}</p>
        <p>考试时间：{{examInfos.examTime}}</p>
        <p>考试地点：{{examInfos.examAddress}}</p>
        <p>报名费用：{{examInfos.price}}</p>

        <div class="enroll-btn">
            <router-link to="/exam-enroll">
                <el-button type="primary">我要报名</el-button>
            </router-link>
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
                examInfos: {
                    title: '2017年度全国大学生英语6级考试的通知',   //考试名称
                    enrollTimeRange: '2018年4月16日——2018年4月26日',   //报名时间
                    examTime: '2018年6月20日',      //考试时间
                    examAddress: '重庆第二师范学院26-18',    //考试地点
                    price: '200元'        //报名费用
                }
            }
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
