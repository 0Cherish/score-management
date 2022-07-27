<template>
    <div class="personal">
        <div class="header">
            <p>personal</p>
            <span>账户管理</span>
        </div>
        <div class="info">
            <p>头像</p>
            <div class="avatar">
                <img alt="user" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" >
            </div>
            <p>姓名</p>
            <p>旧密码：</p>
            <p>新密码</p>

        </div>
    </div>
</template>

<script>
export default {
    name: "personal",
    data(){
        return{

            name:'personal',
            radio:1,
            mobilePhone:'18246761792',


            ruleForm: {
                odlPassword: '',
                newPassword: '',
                newPassword2: ''
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

        }
    },
    methods:{
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
.personal{
    border: black solid 1px;
}
.header span{
    font-size: 30px;
    font-weight: bold;
}
</style>