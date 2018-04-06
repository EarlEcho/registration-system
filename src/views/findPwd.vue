<template>
    <div class="sing-up-w clearfix">
        <div class="sing-up-form">
            <h1 class="sing-title">忘记密码</h1>
            <el-form :model="singUpForm" :rules="rules" ref="singUpForm" class="demo-singUpForm">
                <el-form-item prop="email">
                    <el-input v-model="singUpForm.email" placeholder="请输入注册邮箱">
                        <i slot="prefix" class="icon ion-android-person sing-icon"></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="verifyCode" class="inline-button-item">
                    <el-input v-model="singUpForm.verifyCode" placeholder="请输入邮箱验证码">
                        <i slot="prefix" class="icon ion-android-person sing-icon"></i>
                    </el-input>
                    <el-button type="primary">获取邮箱验证码</el-button>
                </el-form-item>
                <el-form-item prop="pwd">
                    <el-input type="password" v-model="singUpForm.pwd" placeholder="请输入密码">
                        <i slot="prefix" class="icon ion-android-lock sing-icon"></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="confirmPwd">
                    <el-input type="password" v-model="singUpForm.confirmPwd" placeholder="确认密码">
                        <i slot="prefix" class="icon ion-android-lock sing-icon"></i>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <submit-btn submit-url="/" submit-method="POST"
                                :before-submit="beforeSubmit"
                                :submit-data="singUpForm"
                                :submit-handler="submitSuccess" submit-form-ref="singUpForm"
                                btn-text="注册"></submit-btn>
                </el-form-item>
            </el-form>
            <p class="sing-other-action">
                <router-link to="/sing-up" class="g-lf">立即登录</router-link>
            </p>
        </div>

    </div>
</template>

<script>
    import SubmitBtn from '@/components/SubmitBtn'

    export default {
        name: '',
        components: {
            SubmitBtn
        },
        props: [],
        data() {
            return {
                singUpForm: {
                    email: '',
                    verifyCode: '',
                    pwd: '',
                    confirmPwd: ''
                },
                rules: {
                    email: [
                        {required: true, message: '请输入邮箱地址', trigger: 'blur'},
                        {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change'},
                    ],
                    verifyCode: [
                        {required: true, message: '请输入邮箱验证码', trigger: 'blur'},
                        {min: 4,message: '验证码格式错误', trigger: 'blur'},
                    ],
                    pwd: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6, max: 12, message: '密码长度为6-12个字符', trigger: 'blur'}
                    ],
                    confirmPwd: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6, max: 12, message: '密码长度为6-12个字符', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            //登录表单提交前
            beforeSubmit() {
                return true;
            },
            //登录成功
            submitSuccess() {

            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
<style lang="less">
    .sing-up-w {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        div {
            box-sizing: border-box;
        }

        .sing-up-form {
            width: 400px;
            background: white;
        }
        .inline-button-item {
            .el-input {
                width: 253px;
            }
        }
    }

    .sing-title {
        font-size: 28px;
        font-weight: normal;
        margin-bottom: 20px;
        color: #444444;
    }

    .sing-icon {
        margin-left: 6px;
        font-size: 16px;
    }

    .sing-other-action {
        a {
            margin-top: 10px;
            color: #396689;
            font-size: 14px;
        }

    }
</style>
