<template>
    <div class="sing-in-w clearfix">
        <div class="sing-in-left">
            <h1>在线通用报名系统————管理员登录z'z</h1>
        </div>
        <div class="sing-in-right g-rt">
            <div class="sing-in-form">
                <h1 class="sing-title">登录</h1>
                <el-form :model="singUpForm" :rules="rules" ref="singUpForm" class="demo-singUpForm">
                    <el-form-item prop="username">
                        <p class="sing-form-item-title">邮箱</p>
                        <el-input v-model="singUpForm.username" placeholder="请输入邮箱">
                            <i slot="prefix" class="icon ion-android-person sing-icon"></i>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <p class="sing-form-item-title">密码</p>
                        <el-input type="password" v-model="singUpForm.password" placeholder="请输入密码">
                            <i slot="prefix" class="icon ion-android-lock sing-icon"></i>
                        </el-input>
                    </el-form-item>
                    <br>
                    <el-form-item>
                        <submit-btn submit-url="/regs/sys/login" submit-method="POST"
                                    :before-submit="beforeSubmit"
                                    :submit-data="singUpForm"
                                    :submit-handler="submitSuccess"
                                    btn-text="登录"></submit-btn>
                    </el-form-item>
                </el-form>
                <p class="sing-other-action">
                    <router-link to="/sing-in" class="g-lf">立即注册</router-link>
                    <router-link to="/find-pwd" class="g-rt">忘记密码？</router-link>
                </p>
            </div>
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
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        {required: true, message: '请输入邮箱地址', trigger: 'blur'},
                        {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur'},
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6, max: 12, message: '密码长度为6-12个字符', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            //登录表单提交前
            beforeSubmit() {
                let flag = 0;
                this.$refs.singUpForm.validate((valid) => {
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

            }
        }
    }
</script>
<style lang="less">
    .sing-in-w {
        position: absolute;
        width: 100%;
        height: 100%;
        div {
            box-sizing: border-box;
        }
        .sing-in-left {
            position: absolute;
            width: 65%;
            height: 100%;
            background: url("../assets/image/loginbg.png");
            background-size: 102%;
            background-repeat: no-repeat;
            display: flex;
            align-items: center;
            justify-content: center;
            h1 {
                color: white;
                font-weight: normal;
                font-size: 40px;
                letter-spacing: 1px;
            }
        }
        .sing-in-right {
            width: 35%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            .sing-in-form {
                width: 65%;
                background: white;
            }
            .el-form-item {
                margin-bottom: 15px;
            }
        }
    }

    .sing-title {
        font-size: 28px;
        font-weight: normal;
        margin-bottom: 20px;
        color: #444444;
    }

    .sing-form-item-title {
        font-size: 16px;
        color: #696868;
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
