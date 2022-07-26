<template>
    <div id="username_login">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"
                 class="demo-ruleForm">
            <div class="input">
                <el-input type="text"  placeholder="用户名"
                          v-model="ruleForm.username" autocomplete="off"></el-input>

            </div>
            <div class="input">
                <el-input type="password" placeholder="密码"
                          v-model="ruleForm.password" autocomplete="off"></el-input>
            </div>

            <el-button type="primary" style="width:296px;background-color: #1a70c9"
                       @click="submitForm('ruleForm')">登录</el-button>

        </el-form>
    </div>


</template>


<script>
export default {
    name: "UsernameLogin",
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
                username: '',
                password: '',
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
                    this.$router.push('/user')
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
</style>