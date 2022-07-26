<template>
    <div class="user">
        <div class="header">
            <div class="header-left">
                <i class="el-icon-school"></i>
                <span class="title">学生成绩管理系统</span>
            </div>

            <div class="header-right">
                <span>{{ username }}</span>
                <el-popover
                    placement="top-start"
                    trigger="click"
                    width="20"
                    >
                    <p>确定退出登录吗</p>
                    <div style="text-align: right; margin: 0">
                        <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                        <el-button type="primary" size="mini" @click="Exit">确定</el-button>
                    </div>
                    <div class="demo-basic--circle avatar" slot="reference">
                        <el-avatar :src="avatarUrl" size="large"></el-avatar>
                    </div>
                </el-popover>

            </div>

        </div>


        <div class="aside">


            <el-menu :default-active="activeIndex" class="el-menu-vertical-demo"
                     router="router"
                     @close="handleClose"
                     @open="handleOpen">
                <el-menu-item index="/student">
                    <i class="el-icon-user"></i>
                    <span slot="title">学生管理</span>
                </el-menu-item>
                <el-menu-item index="/course">
                    <i class="el-icon-menu"></i>
                    <span slot="title">课程管理</span>
                </el-menu-item>
                <el-menu-item index="/score">
                    <i class="el-icon-document"></i>
                    <span slot="title">成绩管理</span>
                </el-menu-item>
                <el-menu-item index="/personal">
                    <i class="el-icon-setting"></i>
                    <span slot="title">个人中心</span>
                </el-menu-item>
            </el-menu>

        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserMenu",
    data() {
        return {
            activeIndex: '/student',
            username: '米线',
            avatarUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        Exit(){
            this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
.header {
    background-color: #1a70c9;
    height: 60px;
}

.header-left {
    float: left;

    width: 230px;
    line-height: 60px;
    margin-left: 20px;
    font-size: 24px;
    color: white;
}



.header-right {
    float: right;
    font-size: 18px;
    color: white;
    height: 60px;
    line-height: 60px;
}

.avatar {
    margin: 10px 20px 10px 10px;
    float: right;
}

.aside {
    width: 300px;
    height: 700px;
    border: black solid 1px;
    clear: left;
    float: left;
}

.content {
    border: red solid 1px;
    float: left;
}
</style>
