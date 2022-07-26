<template>
<div class="user">
    <div class="aside">
    <el-row class="tac">
        <el-col :span="12">

            <el-menu router="true" :default-active="activeIndex"
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-menu-item index="/student">
                    <i class="el-icon-location"></i>
                    <span slot="title">学生管理</span>
                </el-menu-item>
                <el-menu-item index="/course">
                    <i class="el-icon-menu"></i>
                    <span slot="title">课程管理</span>
                </el-menu-item>
                <el-menu-item index="class" >
                    <i class="el-icon-document"></i>
                    <span slot="title">班级管理</span>
                </el-menu-item>
                <el-menu-item index="/personal">
                    <i class="el-icon-setting"></i>
                    <span slot="title">个人中心</span>
                </el-menu-item>
           </el-menu>
        </el-col>
    </el-row>
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
            activeIndex:'/student'
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style scoped >
.aside{
    width: 500px;
    height: 500px;
    border: black solid 1px;
}

</style>
