<template>
    <div class="sing-up-w clearfix">
        <div class="sing-up-left">
            <h1>在线通用报名系统</h1>
        </div>
        <div class="sing-up-right g-rt">
            <div class="sing-up-form">
                <h1 class="sing-title">登录</h1>
                <el-form :model="singUpForm" :rules="rules" ref="singUpForm" class="demo-singUpForm">
                    <el-form-item prop="name">
                        <p class="sing-form-item-title">用户名</p>
                        <el-input v-model="singUpForm.name" placeholder="请输入用户名">
                            <i slot="prefix" class="icon ion-android-person sing-icon"></i>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="pwd">
                        <p class="sing-form-item-title">密码</p>
                        <el-input type="password" v-model="singUpForm.pwd" placeholder="请输入密码">
                            <i slot="prefix" class="icon ion-android-lock sing-icon"></i>
                        </el-input>
                    </el-form-item>
                </el-form>
                <p class="sing-other-action">
                    <router-link to="/" class="g-lf">立即注册</router-link>
                    <router-link to="/" class="g-rt">忘记密码？</router-link>
                </p>
            </div>
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
                singUpForm: {
                    name: '',
                    pwd: ''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                    ],
                    pwd: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6, max: 12, message: '密码长度为6-12个字符', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
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
        div {
            box-sizing: border-box;
        }
        .sing-up-left {
            position: absolute;
            width: 65%;
            height: 100%;
            background: url("../assets/image/loginbg.png");
            background-size: 102%;
            background-repeat: no-repeat;
            display: flex;
            align-items: center;
            justify-content: center;
            h1{
                color: white;
                font-weight: normal;
                font-size: 40px;
                letter-spacing: 1px;
            }
        }
        .sing-up-right {
            width: 35%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            .sing-up-form {
                width: 65%;
                background: white;
            }
            .el-form-item{
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
