<template>
<div class="course">
    <div class="course-item" v-for="item in courseInfo">
        <p class="name">{{item.name}}</p>
        <p class="description">教师：{{item.teacher}}</p>
        <p class="description">上课时间：{{item.teacher}}</p>
        <p class="description">学分：{{item.credits}}</p>
    </div>
    <div class="course-item">
        <el-button class="el-icon-plus" style="font-size: 140px;float: left;" @click="addCourse"></el-button>
    </div>
</div>
</template>

<script>
export default {
    name: "course",
    data(){
        return{
            courseInfo:[
                {
                    name:'大学英语',
                    teacher:'张三',
                    time:'周一8:00-12:00',
                    credits:5

                },
                {
                    name:'大学物理',
                    teacher:'张三',
                    time:'周一8:00-12:00',
                    credits:5

                },
                {
                    name:'高等数学',
                    teacher:'张三',
                    time:'周一8:00-12:00',
                    credits:5

                },
                {
                    name:'线性代数',
                    teacher:'张三',
                    time:'周一8:00-12:00',
                    credits:5

                }
            ]
        }
    },
    methods:{
        addCourse(){
            this.courseInfo.push(
                {
                    name:'模板',
                    teacher: '无',
                    time:'无',
                    credits: 0
                }
            )
        }
    }
}
</script>

<style scoped>

.course-item{
    width: 180px;
    height: 162px;
    margin:24px 0 0 24px;
    padding: 10px;
    float: left;
    border-radius: 10px;
    box-shadow: #bbb8b8 0 0 10px 2px;
}

.name{
    font-size: 18px;
    font-weight: bold;
    text-align: left;
}
.description{
    font-size: 14px;
    color: #8d8d8d;
    text-align: left;
}
</style>