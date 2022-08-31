<template>
    <div class="user">
        <div class="header">
            <div class="header-left">
                <i class="el-icon-school"></i>
                <span class="title">学生成绩管理系统</span>
            </div>

            <div class="header-right" @mouseover="showExit" @mouseout="hiddenExit">
                <div class="avatar">
                    <el-avatar size="small" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                </div>
                <span>{{ username }}</span>
                <i class="el-icon-arrow-down"></i>
                <div class="exit" :style="{display:isExit}">
                    <i class="el-icon-d-arrow-right"></i>
                    <a @click="logout()">退出登录</a>
                </div>
            </div>
        </div>

        <div class="page">
            <div class="aside">


                <el-menu :default-active="activeIndex" class="el-menu-vertical-demo"
                         router="router"
                         @close="handleClose"
                         @open="handleOpen">
                    <el-menu-item index="/user/student">
                        <i class="el-icon-user"></i>
                        <span slot="title">学生管理</span>
                    </el-menu-item>
                    <el-menu-item index="/user/course">
                        <i class="el-icon-menu"></i>
                        <span slot="title">课程管理</span>
                    </el-menu-item>
                    <el-menu-item index="/user/score">
                        <i class="el-icon-document"></i>
                        <span slot="title">成绩管理</span>
                    </el-menu-item>
                    <el-menu-item index="/user/personal">
                        <i class="el-icon-setting"></i>
                        <span slot="title">个人中心</span>
                    </el-menu-item>
                </el-menu>

            </div>
            <div class="content">
                <div class="main">
                    <router-view></router-view>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "UserMenu",
    data() {
        return {
            activeIndex: '/user/student',
            username: '米线',
            avatarUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            isExit:'none'
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        showExit(){
            this.isExit='block'
        },
        hiddenExit(){
            this.isExit='none'
        },
        logout(){
            this.$router.push('/login');
        }
    },
    mounted() {
        this.$router.push('/user/student')
    }
}
</script>

<style scoped>
.user{
    height: 100%;
}
.header {
    background-color: #4C4C4C;
    height: 40px;
}

.header-left {
    float: left;
    width: 230px;
    line-height: 40px;
    margin-left: 20px;
    font-size: 20px;
    color: white;
}

.header-right {
    float: right;
    margin-right: 20px;
    font-size: 16px;
    color: white;
    line-height: 40px;
}

.avatar {
    height: 28px;
    margin: 6px 10px 0 0;
    float: left;
}

.exit{
    font-size: 16px;
    position: fixed;
    right: 20px;
    top: 40px;
    background-color: #4C4C4CAB;
    padding: 0 5px;
}

.exit a:hover{
    text-decoration: underline;
}

.page{
    height: calc(100% - 40px);
    width: 1200px;
    margin:auto;
}
.page::after{
    content: '';
    display: block;
    clear: both;
}
.aside {
    width: 220px;
    clear: left;
    float: left;
}

.content {
    width: 920px;
    height: calc(100% - 60px);
    padding: 30px;
    float: left;
}

.main{
    height: 100%;
    background-color: white;
    border-radius: 10px;
    box-shadow: #bbb8b8 0 0 10px 2px;
    overflow: auto;
}
</style>
