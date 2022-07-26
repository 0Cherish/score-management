<template>
<div class="course">


    <div class="course-item">
        <el-button class="el-icon-plus" style="font-size: 198px;float: left;" @click="addCourse"></el-button>
    </div>

    <div class="course-item" v-for="item in courseInfo">
        <img alt="课程图片" src="../../assets/img/1.jpg">
        <p class="name">{{item.name}}</p>
        <p class="description">{{item.teacher}}</p>
        <p class="description">上课时间：{{item.teacher}}</p>
        <p class="description">学分：{{item.credits}}</p>
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
                    img:'../../assets/img/1.jpg',
                    name:'????????',
                    teacher:'张三',
                    time:'周一8:00-12:00',
                    credits:5

                },
                {
                    img:'../../assets/img/1.jpg',
                    name:'????????',
                    teacher:'张三',
                    time:'周一8:00-12:00',
                    credits:5

                },
                {
                    img:'../../assets/img/1.jpg',
                    name:'????????',
                    teacher:'张三',
                    time:'周一8:00-12:00',
                    credits:5

                },
                {
                    img:'../../assets/img/1.jpg',
                    name:'????????',
                    teacher:'张三',
                    time:'周一8:00-12:00',
                    credits:5

                },{
                    img:'../../assets/img/1.jpg',
                    name:'????????',
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
.course{
    width: 1500px;
}
.course-item{
    width: 240px;
    height: 300px;
    border: #1a70c9 solid 1px;
    margin-right: 30px;
    float: left;

}
img{
    width: 240px;
    height: 130px;
    border-radius: 10px;
}
.name{
    font-size: 16px;
    font-weight: bold;
    text-align: left;
}
.description{
    font-size: 12px;
    color: #8d8d8d;
    text-align: left;
}
</style>