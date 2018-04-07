<template>
    <div class="sing-up-w clearfix">
        <div class="sing-up-form">
            <h1 class="sing-title">注册</h1>
            <el-form :model="singInForm" :rules="rules" ref="singInForm" class="demo-singInForm">
                <el-form-item prop="username">
                    <el-input v-model="singInForm.username" placeholder="请输入注册邮箱">
                        <i slot="prefix" class="icon ion-android-person sing-icon"></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="validate" class="inline-button-item">
                    <el-input v-model="singInForm.validate" placeholder="请输入邮箱验证码">
                        <i slot="prefix" class="icon ion-android-person sing-icon"></i>
                    </el-input>
                    <el-button type="primary" @click="sendMsgEvent(singInForm.username)">获取邮箱验证码</el-button>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="singInForm.password" placeholder="请输入密码">
                        <i slot="prefix" class="icon ion-android-lock sing-icon"></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="confirmPwd">
                    <el-input type="password" v-model="singInForm.confirmPwd" placeholder="确认密码">
                        <i slot="prefix" class="icon ion-android-lock sing-icon"></i>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <submit-btn submit-url="/regs/user/regist" submit-method="POST"
                                :before-submit="beforeSubmit"
                                :submit-data="singInForm"
                                :submit-handler="submitSuccess"
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
    import functions from '@/functions/common.js'
    import SubmitBtn from '@/components/SubmitBtn'

    export default {
        name: '',
        components: {
            SubmitBtn
        },
        props: [],
        data() {
            var checkConfirmPwd = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.singInForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                singInForm: {
                    username: '',
                    validate: '',
                    password: '',
                    confirmPwd: ''
                },
                rules: {
                    username: [
                        {required: true, message: '请输入邮箱地址', trigger: 'blur'},
                        {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur'},
                    ],
                    validate: [
                        {required: true, message: '请输入邮箱验证码', trigger: 'blur'},
                        {min: 4, message: '验证码格式错误', trigger: 'blur'},
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6, max: 12, message: '密码长度为6-12个字符', trigger: 'blur'}
                    ],
                    confirmPwd: [
                        {validator: checkConfirmPwd, trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            //登录表单提交前
            beforeSubmit() {
                let flag = 0;
                this.$refs.singInForm.validate((valid) => {
                    if (valid) {
                        console.log('成功');
                        flag = 1;
                    } else {
                        console.log('error submit!!');
                        flag = 0;
                    }
                });
                if (flag == 1) {
                    return true;
                }
            },
            //登录成功
            submitSuccess() {
                this.$notify({
                    title: '成功',
                    message: '注册成功，2秒后跳转到登录页面。',
                    type: 'success'
                });
                setTimeout(() => {
                    this.$router.replace('/sing-up')
                },2000)
            },
            //发送邮箱验证码
            sendMsgEvent(email) {
                if (email !== '') {
                    functions.postAjax('/regs/user/sendEmail', {address: email}, (data) => {
                        console.log(data);
                        if (data.code == 200) {
                            this.$message.success('邮箱验证码发送成功');
                        } else {
                            this.$message.error('出错了！验证码发送失败');
                        }
                    });
                }else{
                    this.$message.warning('请填写邮箱号');
                }


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
        background-color: white;
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
