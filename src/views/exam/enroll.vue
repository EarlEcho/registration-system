<template>
    <div class="enroll-w module-content-w">
        <h1>填写个人资料</h1>
        <el-form :model="enrollForm" ref="enrollForm" label-width="100px"
                 class="enroll-form-w" :rules="enrollRules">
            <el-row >
                <el-col :span="6">
                    <el-upload
                        class="avatar-uploader"
                        action="/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess">
                        <img v-if="enrollForm.img" :src="enrollForm.img" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>

                </el-col>
                <el-col :span="18">
                    <el-form-item label="姓名" prop="name">
                        <el-input type="text" v-model="enrollForm.name" auto-complete="off" placeholder="请输入姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="学号" prop="schoolNum">
                        <el-input type="password" v-model="enrollForm.schoolNum" auto-complete="off" placeholder="请输入学号"></el-input>
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
                        <el-button type="primary" @click="submitForm('enrollForm')">提交</el-button>
                        <el-button @click="resetForm('enrollForm')">重置</el-button>
                    </el-form-item>
                </el-col>
            </el-row>

        </el-form>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        props: [],
        data() {
            return {
                enrollForm: {
                    img: '', //照片
                    name: '', //姓名
                    schoolNum: '',   //学号
                    sex:'', //性别
                    idCard: '',  //身份证号
                    mobile: '',  //电话号码
                    // express
                },
                enrollRules: {
                    name: [
                        {required: true, message: '请输入邮箱地址', trigger: 'blur'},
                        {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur'},
                    ],
                    schoolNum: [
                        {required: true, message: '请输入邮箱验证码', trigger: 'blur'},
                        {min: 4, message: '验证码格式错误', trigger: 'blur'},
                    ],
                    sex:[
                        {required: true, message: '请输入邮箱验证码', trigger: 'blur'},
                    ],
                    idCard: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6, max: 12, message: '密码长度为6-12个字符', trigger: 'blur'}
                    ],
                    mobile: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6, max: 12, message: '密码长度为6-12个字符', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            handleAvatarSuccess() {

            }
        }
    }
</script>
<style lang="less">
    .enroll-w {
        h1 {
            font-size: 28px;
            font-weight: normal;
        }
        .enroll-form-w{
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
        .el-form-item__content{
            width: 320px;
            .el-select{
                width: 100%;
            }
        }
    }
</style>
