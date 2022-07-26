<template>
<div class="student">
    <div class="header">
        <span>学生基本信息</span>
        <div class="import">
        <el-button type="success" icon="el-icon-bottom-left">Excel导入</el-button>
        </div>
    </div>
    <el-divider></el-divider>
    <div class="info">
    <el-table
        :data="tableData"
        :default-sort="{prop:'name',order:'descending'}"
        stripe
        height="900"
        style="width: 100%">

        <el-table-column
            sortable="true"
            prop="name"
            label="姓名"
            width="120">
        </el-table-column>
        <el-table-column
            sortable="true"
            prop="gender"
            label="性别"
            width="80">
        </el-table-column>
        <el-table-column
            sortable="true"
            prop="grade"
            label="年级"
            width="80">
        </el-table-column>
        <el-table-column
            sortable="true"
            prop="id"
            label="学号"
            width="130">
        </el-table-column>

        <el-table-column
            sortable="true"
            prop="class"
            label="班级"
            width="130">
        </el-table-column>

        <el-table-column
            sortable="true"
            prop="course"
            label="课程"
            width="164">
        </el-table-column>

        <el-table-column
            sortable="true"
            prop="academy"
            label="学院"
            width="164">
        </el-table-column>
        <el-table-column
            sortable="true"
            prop="major"
            label="专业"
        width="150">
        </el-table-column>
        <el-table-column
            label="操作"
            width="100"
        >

                <el-button
                    size="mini"
                    type="danger"
                    @click="">删除</el-button>

        </el-table-column>

    </el-table>
    </div>
</div>
</template>

<script>
export default {
    name: "student",
    data(){
        return{
            tableData: [
                {
                name: '张三',
                gender:'男',
                id:'15461349',
                class:'31497647',
                grade:'2022',
                    course:'C语言',
                academy:'理学院',
                major:'数学与应用数学'
            }, {
                    name: '张三',
                    gender:'男',
                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'数学与应用数学'
                },  {
                    name: '张三',
                    gender:'男',
                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'数学与应用数学'
                },{
                    name: '张三',
                    gender:'男',
                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'数学与应用数学'
                },
                {
                    name: '张三',
                    gender:'男',
                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'数学与应用数学'
                },
                {
                    name: '张三',
                    gender:'男',
                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'数学与应用数学'
                },
                {
                    name: '张三',
                    gender:'男',
                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'数学与应用数学'
                },
                {
                    name: '张三',
                    gender:'男',
                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'数学与应用数学'
                },
                {
                    name: '张三',
                    gender:'男',
                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'数学与应用数学'
                },
                {
                    name: '张三',
                    gender:'男',
                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'数学与应用数学'
                },
                {
                    name: '张三',
                    gender:'男',
                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'数学与应用数学'
                },
                {
                    name: '张三',
                    gender:'男',
                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'数学与应用数学'
                },
                {
                    name: '张三',
                    gender:'男',
                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'数学与应用数学'
                },
                {
                    name: '张三',
                    gender:'男',
                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'数学与应用数学'
                },
                {
                    name: '张三',
                    gender:'男',
                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'数学与应用数学'
                },
                {
                    name: '张三',
                    gender:'男',
                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'数学与应用数学'
                },
                {
                    name: '张三',
                    gender:'男',
                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'数学与应用数学'
                },
                {
                    name: '张三',
                    gender:'男',
                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'数学与应用数学'
                }
            ]
        }
},
    methods:{
        handleDelete(index, row) {
            console.log(index, row);
        }
    }
}
</script>

<style scoped>
.header{
    height: 60px;
}
span{
    font-size: 30px;
    font-weight: bold;
    line-height: 80px;
}
.import{
    float: right;
}
</style>