<template>
    <div class="login">
        <p class="title">学生成绩管理系统</p>
        <div id="login_menu">
            <el-menu :default-active="activeIndex" router="router" class="el-menu-demo" mode="horizontal"  >
                <el-menu-item index="/username">用户名登录</el-menu-item>
                <el-menu-item index="/mobile">手机号登录</el-menu-item>
                <el-menu-item index="/email">邮箱登录</el-menu-item>
            </el-menu>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

export default {
    name: "LoginMenu",
    data() {
        return {
            activeIndex:'/username'
        };
    },
    mounted() {
        this.$router.push('/username')
    }

}
</script>

<style scoped>
.login{
    padding-top: 130px;
}
.title{
    font-weight: bold;
    font-size: 30px;
    margin-top: 0;
}
#login_menu {
    background-color: #f8f8f8;
    width: 316px;
    height: 330px;
    font-weight: bold;
    margin:auto;
    box-shadow: rgba(0,0,0,0.1) 0 0 20px 2px;
    border-radius: 10px;
}

</style>