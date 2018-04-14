<template>
    <div class="my-infos-w">
        <my-header></my-header>
        <left-menu></left-menu>
        <div class="my-infos-content-w menu-content-w">
            <h1>个人中心</h1>
            <el-form :model="enrollForm" ref="enrollForm" label-width="100px"
                     class="enroll-form-w" :rules="enrollRules">
                <el-row>
                    <el-col :span="6">
                        <el-upload
                            class="avatar-uploader"
                            :data="formData"
                            action="http://192.168.0.107:8085/regs/apply/fileUpload"
                            :before-upload="beforeUpload" :on-success="afterUpload"
                            :show-file-list="false">
                            <img v-if="enrollForm.img" :src="enrollForm.img" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"
                               v-loading.body="loading"></i>
                        </el-upload>

                    </el-col>
                    <el-col :span="18">
                        <el-form-item label="姓名" prop="name">
                            <el-input type="text" v-model="enrollForm.name" auto-complete="off"
                                      placeholder="请输入姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="性别" prop="sex">
                            <el-select v-model="enrollForm.sex" placeholder="选择性别">
                                <el-option label="男" value="0"></el-option>
                                <el-option label="女" value="1"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="身份证" prop="idCard">
                            <el-input v-model.number="enrollForm.idCard" placeholder="请输入身份证"></el-input>
                        </el-form-item>
                        <el-form-item label="联系电话" prop="mobile">
                            <el-input v-model.number="enrollForm.mobile" placeholder="请输入联系电话"></el-input>
                        </el-form-item>

                        <el-form-item>
                            <submit-btn submit-url="/regs/apply/applyExam" submit-method="POST"
                                        :before-submit="beforeSubmit"
                                        :submit-data="enrollForm"
                                        :submit-handler="submitSuccess"
                                        btn-text="注册"></submit-btn>
                            <el-button @click="resetForm('enrollForm')">重置</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>

            </el-form>
        </div>

    </div>
</template>

<script>
    import LeftMenu from '@/components/leftMenu'
    import MyHeader from '@/components/header'

    import SubmitBtn from '@/components/SubmitBtn'

    export default {
        name: '',
        components: {LeftMenu, SubmitBtn, MyHeader},
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
                formData: {},
                loading: false,
                enrollForm: {
                    id: '',
                    img: '', //照片
                    name: '', //姓名
                    sex: '', //性别
                    idCard: '',  //身份证号
                    mobile: '',  //电话号码
                    // express
                },
                enrollRules: {
                    name: [
                        {required: true, message: '请输入姓名', trigger: 'blur'},
                    ],
                    sex: [
                        {required: true, message: '请选择性别', trigger: 'blur'},
                    ],
                    idCard: [
                        {required: true, validator: checkId, trigger: 'blur'}
                    ],
                    mobile: [
                        {required: true, validator: checkMobile, trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            handleAvatarSuccess() {

            },
            beforeSubmit() {

            },
            submitSuccess() {

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
                this.enrollForm.img = response.data;
                this.loading = false;
            },

        }
    }
</script>
<style lang="less">
    .my-infos-w {
        .my-infos-content-w {
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
            .submit-btn {
                display: inline-block;
            }
        }
        .enroll-form-w {
            width: 80%;
            margin-top: 40px;
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
