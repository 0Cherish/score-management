<template>
        <div id="login_menu">

            <el-menu :default-active="activeIndex" router="true" class="el-menu-demo" mode="horizontal"  >
                <el-menu-item index="/username">用户名登录</el-menu-item>
                <el-menu-item index="/mobile">手机号登录</el-menu-item>
                <el-menu-item index="/email">邮箱登录</el-menu-item>
            </el-menu>
            <router-view></router-view>
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

}
</script>

<style scoped>

#login_menu {
    background-color: white;
    width: 316px;
    height: 330px;
    font-weight: bold;
    border: red solid 1px;
    position: fixed;
    right: 220px;
    top: 220px;
    box-shadow: rgba(0,0,0,0.1) 0 0 20px 2px;
    border-radius: 10px;
}

</style>