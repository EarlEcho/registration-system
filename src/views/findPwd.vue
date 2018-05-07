<template>
    <div class="repwd-w clearfix">
        <div class="repwd-form">
            <h1 class="sing-title">忘记密码</h1>
            <el-form :model="rePwdForm" :rules="rules" ref="rePwdForm" class="demo-rePwdForm">
                <el-form-item prop="emailAddress">
                    <el-input v-model="rePwdForm.emailAddress" placeholder="请输入注册邮箱">
                        <i slot="prefix" class="icon ion-android-person sing-icon"></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="token" class="inline-button-item">
                    <el-input v-model="rePwdForm.token" placeholder="请输入邮箱验证码">
                        <i slot="prefix" class="icon ion-android-person sing-icon"></i>
                    </el-input>
                    <el-button type="primary" :disabled="emailBtnDis" @click="sendMsgEvent(rePwdForm.emailAddress)">
                        {{emailText}}
                    </el-button>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="rePwdForm.password" placeholder="请输入密码">
                        <i slot="prefix" class="icon ion-android-lock sing-icon"></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="confirmPwd">
                    <el-input type="password" v-model="rePwdForm.confirmPwd" placeholder="确认密码">
                        <i slot="prefix" class="icon ion-android-lock sing-icon"></i>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <submit-btn submit-url="/private/user/pub/updatePassword" submit-method="POST"
                                :before-submit="beforeSubmit"
                                :submit-data="rePwdForm"
                                :submit-handler="submitSuccess" submit-form-ref="rePwdForm"
                                btn-text="提交"></submit-btn>
                </el-form-item>
            </el-form>
            <p class="sing-other-action">
                <router-link to="/repwd" class="g-lf">立即登录</router-link>
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
            return {
                rePwdForm: {
                    emailAddress: '',
                    token: '',
                    password: '',
                    confirmPwd: ''
                },
                emailBtnDis: false,
                emailText: '获取邮箱验证码',

                countDownTimer: null,
                counter: 60,

                rules: {
                    emailAddress: [
                        {required: true, message: '请输入邮箱地址', trigger: 'blur'},
                        {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change'},
                    ],
                    token: [
                        {required: true, message: '请输入邮箱验证码', trigger: 'blur'},
                        {min: 4, message: '验证码格式错误', trigger: 'blur'},
                    ],
                    password: [
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
            //修改密码成功
            submitSuccess() {
                this.$notify({
                    title: '成功',
                    message: '修改密码成功，2秒后跳转到登录页面。',
                    type: 'success'
                });
                setTimeout(() => {
                    this.$router.replace('/repwd')
                }, 2000)
            },
            //发送邮箱验证码
            sendMsgEvent(emailAddress) {
                if (emailAddress !== '') {
                    functions.postAjax('/private/user/pub/sendEmail', {address: emailAddress}, (data) => {
                        this.emailBtnDis = true;
                        this.emailText = "60s后重新发送";
                        let _this = this;
                        console.log(data);
                        if (data.code == 200) {
                            this.$message.success('邮箱验证码发送成功');
                            _this.countDownTimer = setInterval(() => {
                                console.log(_this.counter);
                                _this.counter--;
                                _this.emailText = _this.counter + "s后重新发送";
                                console.log(_this.emailText);
                                if (_this.counter <= 0) {
                                    _this.reset();
                                }
                            }, 1000);

                        } else {
                            this.$message.error('出错了！验证码发送失败');
                        }
                    });
                } else {
                    this.$message.warning('请填写邮箱号');
                }
            },
            reset: function () {
                this.emailBtnDis = false;
                this.emailText = "获取邮箱验证码";
                clearInterval(this.countDownTimer);
            },
            submitForm(formName) {
                this.$refs[formName].token((valid) => {
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
    .repwd-w {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        .submit-btn {
            width: 100%;
            button {
                width: 100%;
            }
        }
        div {
            box-sizing: border-box;
        }

        .repwd-form {
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
