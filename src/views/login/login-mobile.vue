<template>
    <div id="mobile_login">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"
                 class="demo-ruleForm">
            <div class="input">
                <el-input type="text" placeholder="请输入手机号"
                          v-model="ruleForm.pass" autocomplete="off"></el-input>
            </div>
            <div class="input">
                <el-input type="text" placeholder="请输入短信验证码"
                          v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </div>
            <div class="button">
                <el-button type="primary" style="width:296px;background-color: #6b9bcd"
                           @click="submitForm('ruleForm')">获取短信验证码</el-button>

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
    name: "MobileLogin",
    data() {
        var checkAge = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('年龄不能为空'));
            }
            setTimeout(() => {
                if (!Number.isInteger(value)) {
                    callback(new Error('请输入数字值'));
                } else {
                    if (value < 18) {
                        callback(new Error('必须年满18岁'));
                    } else {
                        callback();
                    }
                }
            }, 1000);
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                pass: '',
                checkPass: '',
                age: ''
            },
            rules: {
                pass: [
                    {validator: validatePass, trigger: 'blur'}
                ],
                checkPass: [
                    {validator: validatePass2, trigger: 'blur'}
                ],
                age: [
                    {validator: checkAge, trigger: 'blur'}
                ]
            }
        };
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

<style scoped>
.input {
    margin: 20px 10px;
}
.button{
    margin:20px 10px;
}
</style>
