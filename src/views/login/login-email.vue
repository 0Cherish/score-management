<template>
    <div id="mobile_login">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"
                 class="demo-ruleForm">
            <div class="input">
                <el-form-item prop="phone">
                    <el-input type="text" placeholder="请输入你的邮箱"
                              v-model="ruleForm.phone" autocomplete="off"></el-input>
                </el-form-item>
            </div>
            <div class="input">
                <el-form-item prop="code">
                    <el-input type="text" placeholder="请输入验证码"
                              v-model="ruleForm.code" autocomplete="off"></el-input>
                </el-form-item>
            </div>
            <div class="button">
                <el-button type="primary" style="width:296px;background-color: #6b9bcd"
                           @click="getCode">{{codeText}}</el-button>

            </div>
            <div class="button">
                <el-button type="primary" style="width:296px;background-color: #1a70c9"
                           @click="resetForm('ruleForm')">登录</el-button>

            </div>

        </el-form>

    </div>
</template>

<script>
export default {
    name: "login-email",
    data() {
        let validatePhone = (rule, value, callback) => {
            let reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
            if (value==='') {
                callback(new Error('请输入你的邮箱'));
            }else if(!reg.test(this.ruleForm.phone)){
                callback(new Error('请输入正确的邮箱'));
            }else{
                callback();
            }
        };

        let validateCode = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入验证码'));
            }  else {
                callback();
            }
        };
        return {
            codeText:'获取邮箱验证码',
            waitTime:60,
            ruleForm: {
                phone: '',
                code: '',
            },
            rules: {
                phone: [
                    {validator: validatePhone, trigger: 'blur'}
                ],
                code: [
                    {validator: validateCode, trigger: 'blur'}
                ]

            }
        };
    },
    methods: {

        submitForm(formName) {
            this.$refs[formName].validateField((phone) => {
                if (phone) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },

    }
}
</script>

<style scoped>
.input {
    margin: 20px 10px;
}
.button{
    margin:20px 10px;
}

</style>
