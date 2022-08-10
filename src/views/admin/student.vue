<template>
    <div class="student">
        <div class="header">
            <div class="delete">
                <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </div>
            <span>学生基本信息</span>
            <div class="input">
                <el-upload
                    class="upload-demo"
                    action=""
                    multiple
                    :limit="3"
                    shoe-file-list="false">
                    <el-button size="primary" type="primary">导入Excel</el-button>
                </el-upload>
            </div>
        </div>
        <div class="info">
            <el-table
                :data="tableData"
                :default-sort="{prop:'name',order:'descending'}"
                stripe
                border
                height="760"
                style="width: 100%">

                <el-table-column
                    type="selection"
                    width="55">
                </el-table-column>
                <el-table-column
                    sortable="true"
                    prop="name"
                    label="姓名"
                    width="80">
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
                    width="100">
                </el-table-column>

                <el-table-column
                    sortable="true"
                    prop="class"
                    label="班级"
                    width="100">
                </el-table-column>

                <el-table-column
                    sortable="true"
                    prop="course"
                    label="课程"
                    width="135">
                </el-table-column>

                <el-table-column
                    sortable="true"
                    prop="academy"
                    label="学院"
                    width="135">
                </el-table-column>
                <el-table-column
                    sortable="true"
                    prop="major"
                    label="专业"
                    width="135">
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
    margin-bottom: 10px;
}
.delete{
    float: left;
    margin: 10px 0 0 10px;
}
span{
    font-size: 30px;
    font-weight: bold;
    line-height: 80px;
}
.input{
    float: right;
    margin: 20px 10px 0 0;
}
</style>