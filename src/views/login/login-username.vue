<template>
    <div id="username_login">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"
                 class="demo-ruleForm">
            <div class="input">
                <el-form-item prop="username" >
                    <el-input type="text"  placeholder="职工号"
                              v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>
            </div>
            <div class="input">
                <el-form-item prop="password">
                    <el-input type="password" placeholder="密码"
                              v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
            </div>
            <div class="identify-code">
                <el-form-item prop="code">
                    <div class="code">
                        <el-input type="text" placeholder="验证码"
                                  v-model="ruleForm.code" autocomplete="off"></el-input>
                    </div>
                    <div class="identify" @click="refreshCode">
                        <identify-code :identify-code="identifyCode" ></identify-code>
                    </div>
                </el-form-item>

            </div>
            <el-button type="primary" style="width:296px;background-color: #1a70c9"
                       @click="submitForm('ruleForm')">登录</el-button>
        </el-form>
    </div>


</template>


<script>
import IdentifyCode from "../../components/identify";
import axios from "axios";
export default {
    name: "login-username",
    components: {IdentifyCode},
    data() {
        let validateName = (rule, value, callback) => {
            if (value==='') {
                callback(new Error('请输入你的职工号'));
            }else {
                callback();
            }
        };
        let validatePass = (rule, value, callback) => {
            if (value==='') {
                callback(new Error('请输入你的密码'));
            } else {
                callback();
            }
        };
        let checkCode = (rule, value, callback) => {
            if (value==='') {
                callback(new Error('请输入验证码'));
            } else if(value!==this.identifyCode){
                    callback(new Error('请输入正确的验证码'));
                    this.refreshCode();
            } else{
                callback();
            }

        };
        return {
            //生成验证码的字符范围
            identifyCodes:'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            //生成的验证码
            identifyCode:'',
            ruleForm: {
                username: '',
                password: '',
                code: ''
            },
            rules: {
                username: [
                    {validator: validateName, trigger: 'blur'}
                ],
                password: [
                    {validator: validatePass, trigger: 'blur'}
                ],
                code: [
                    {validator: checkCode, trigger: 'blur'}
                ]
            }

        };
    },
    methods: {
        //生成随机数
        randomNum(min,max){
            return Math.floor(Math.random()*(max-min)+min);
        },
        //生成验证码
        makeCode(arr,length){
            for (let i = 0; i < length; i++) {
                //随机字符串拼接
                this.identifyCode+=this.identifyCodes[
                    this.randomNum(0,this.identifyCodes.length)]
            }
        },
        //刷新验证码
        refreshCode(){
            this.identifyCode='';
            this.makeCode(this.identifyCodes,4)
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // this.$router.push('/user')
                    axios.get("http://localhost:1080/cookie_session_war/login",{
                        params:{
                            username:this.ruleForm.username,
                            password:this.ruleForm.password
                        }
                    }).then((response)=>{
                        console.log(response.data);
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },

    },
    mounted() {
        this.refreshCode();
    }
}
</script>

<style scoped>
.input {
    margin: 20px 10px;
}
.identify-code{
    margin: 0 10px;
}
.code{
    float: left;
    width: 176px;

}
.identify{
    float: right;
    width: 100px;
    height: 40px;

}
</style>