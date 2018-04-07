<template>

    <!--等待提交组件-->
    <div class="submit-btn">
        <el-button type="primary" @click.native="beginSubmit" :loading="loading" :disabled="disable">{{buttonText}}
        </el-button>
    </div>
</template>

<script>
    import axios from '../../config/http'
    import functions from '@/functions/common.js'
    export default {
        components: {},
        name: 'submit-btn',
        data() {
            return {
                loading: false,
                buttonText: '提交',
                disable: false
            }
        },
        props: ['submitUrl', 'submitMethod', 'submitData', 'submitHandler', 'btnText', 'beforeSubmit'],
        mounted: function () {
            this.buttonText = this.btnText || this.buttonText;
            this.loadingText = "正在" + this.buttonText;
        },
        methods: {
            beginSubmit() {
                if (this.beforeSubmit) {
                    if (this.beforeSubmit() != true) {
                        return
                    }
                }
                console.log(this.submitData);
                this.loading = true;
                this.buttonText = "正在" + this.buttonText;
                this.disable = true;
                if (this.submitMethod == 'GET') {
                    axios({
                        method: 'get',
                        url: this.submitUrl,
                        data: this.submitData
                    }).then((response) => {
                        this.afterSubmit(response);
                    }).catch((response) => {
                        if(response.message === 'forceRefresh') {
                            window.location.reload(true)
                        }
                    })
                } else {
                    axios({
                        method: 'post',
                        url: this.submitUrl,
                        data: this.submitData
                    }).then((response) => {
                        this.afterSubmit(response);
                    }).catch((response) => {
                        this.$message({
                            message: '未知错误,请重试。',
                            type: 'warning'
                        });
                        setTimeout(()=>{
                            window.location.reload(true);
                        },1000)
                        if(response.message === 'forceRefresh') {
                            window.location.reload(true);
                        }
                    })
                }

            },
            afterSubmit(response) {
                //恢复提交按钮UI
                this.loading = false;
                this.buttonText = this.btnText || '提交';
                this.disable = false;
                //多条form相关的错误信息，增加rules, 且显示一次后不再有效
                var triggerCountFromServer = 0;
                //处理返回结果
                var result = response;
                console.log(result);
                if (result.status == 200){
                    this.submitHandler(result);
                } else {
                    this.$message({
                        message: result.msg,
                        type: 'warning'
                    });
                    return;
                }

            }
        }
    }
</script>
<style lang="less">
    .submit-btn {
        button {
            width: 100%;
        }
    }
</style>
