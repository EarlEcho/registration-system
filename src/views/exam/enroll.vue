<template>
    <div class="enroll-w">
        <my-header></my-header>
        <div class="enroll-form-w">
            <h1>填写报名信息</h1>
            <el-form :model="enrollForm" ref="enrollForm" label-width="100px"
                     :rules="enrollRules">
                <el-row>
                    <el-col :span="6">
                        <el-upload
                            class="avatar-uploader"
                            :data="formData"
                            action="http://47.104.150.0:8085/regs/private/apply/fileUpload"
                            :headers="upLoadHeader"
                            :before-upload="beforeUpload" :on-success="afterUpload"
                            :show-file-list="false">
                            <img v-if="enrollForm.photoPath" :src="enrollForm.photoPath" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"
                               v-loading.body="loading"></i>
                        </el-upload>

                    </el-col>
                    <el-col :span="18">
                        <el-form-item label="姓名" prop="realName">
                            <el-input type="text" v-model="enrollForm.realName" auto-complete="off"
                                      placeholder="请输入姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="性别" prop="sex">
                            <el-select v-model="enrollForm.sex" placeholder="选择性别">
                                <el-option label="男" value="男"></el-option>
                                <el-option label="女" value="女"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="身份证" prop="cartNum">
                            <el-input v-model="enrollForm.cartNum" placeholder="请输入身份证"></el-input>
                        </el-form-item>
                        <el-form-item label="联系电话" prop="phoneNum">
                            <el-input v-model="enrollForm.phoneNum" placeholder="请输入联系电话"></el-input>
                        </el-form-item>

                        <el-form-item>
                            <submit-btn submit-url="/private/apply/applyExam" submit-method="POST"
                                        :before-submit="beforeSubmit"
                                        :submit-data="enrollForm"
                                        :submit-handler="submitSuccess"
                                        btn-text="确认报名"></submit-btn>
                            <el-button @click="resetForm('enrollForm')">重置</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>

            </el-form>
        </div>

    </div>
</template>

<script>
    import MyHeader from '@/components/header'
    import SubmitBtn from '@/components/SubmitBtn'
    import functions from '@/functions/common.js'

    export default {
        name: '',
        components: {SubmitBtn, MyHeader},
        props: [],
        data() {
            var checkId = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入身份证号码'));
                } else {
                    callback();
                }
            };
            var checkMobile = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入手机号'));
                } else if (value.length !== 11) {
                    callback(new Error('手机号格式错误'));
                } else {
                    callback();
                }
            };
            return {
                upLoadHeader: {
                    sid: localStorage.sid
                },
                formData: {},
                loading: false,
                enrollForm: {
                    examId: '',
                    photoPath: '', //照片
                    realName: '', //姓名
                    sex: '', //性别
                    cartNum: '',  //身份证号
                    phoneNum: '',  //电话号码
                },
                enrollRules: {
                    realName: [
                        {required: true, message: '请输入姓名', trigger: 'blur'},
                    ],
                    sex: [
                        {required: true, message: '请选择性别', trigger: 'blur'},
                    ],
                    cartNum: [
                        {required: true, validator: checkId, trigger: 'blur'}
                    ],
                    phoneNum: [
                        {required: true, validator: checkMobile, trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            beforeSubmit() {
                console.log(this.enrollForm);
                return true;

            },
            submitSuccess() {
                this.$notify({
                    title: '成功',
                    message: '报名成功,即将跳转到我的报名！',
                    type: 'success'
                });
                setTimeout(()=>{
                    this.$router.replace('/my-exam');
                },1500)
            },
            beforeUpload: function (file) {

                if (file.size / 1024 > this.sizeLimit) {
                    this.$message.error(this.tips);
                    return false;
                }

                this.loading = true;
            },
            afterUpload: function (response, file, fileList) {
                console.log(response.data);
                this.enrollForm.photoPath = response.data;
                this.loading = false;
            },

            fetchDate() {
                functions.getAjax('/private/user/getOne', (res) => {
                    console.log(res);
                    this.enrollForm = {
                        examId: this.$route.query.id,
                        photoPath: res.data.photoPath, //照片
                        realName: res.data.realname, //姓名
                        sex: res.data.sex, //性别
                        cartNum: res.data.idcard,  //身份证号
                        phoneNum: res.data.phoneNum,  //电话号码
                    }
                });
            }
        },
        mounted() {
            this.fetchDate();
            console.log(this.$route.query.id);
            this.enrollForm.examId = this.$route.query.id;
        }
    }
</script>
<style lang="less">
    .enroll-w {
        box-sizing: border-box;
        div {
            box-sizing: border-box;
        }

        .enroll-form-w {
            position: relative;
            top: 80px;
            background: white;
            width: 85%;
            margin: 0 auto;
            border-radius: 10px;
            padding: 40px 50px;
            box-sizing: border-box;
        }
        h1 {
            font-size: 28px;
            font-weight: normal;
            margin-bottom: 30px;
        }
        .avatar-uploader .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }
        .avatar-uploader .el-upload:hover {
            border-color: #409EFF;
        }
        .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 178px;
            height: 178px;
            line-height: 178px;
            text-align: center;
        }
        .avatar {
            width: 178px;
            height: 178px;
            display: block;
        }
        .el-form-item__content {
            width: 320px;
            .el-select {
                width: 100%;
            }
        }
    }
</style>
