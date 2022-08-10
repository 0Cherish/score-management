<template>
    <div class="score">
        <div class="header">
            <span>学生成绩表</span>
            <div class="output">
                <el-button size="primary" type="primary">导出成绩册</el-button>
            </div>
        </div>
        <div class="info">
            <el-table
                :data="tableData"
                :default-sort="{prop:'name',order:'descending'}"
                stripe
                height="760"
                style="width: 100%">

                <el-table-column
                    sortable="true"
                    prop="name"
                    label="姓名"
                    width="100">
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
                    width="120">
                </el-table-column>

                <el-table-column
                    sortable="true"
                    prop="class"
                    label="班级"
                    width="120">
                </el-table-column>

                <el-table-column
                    sortable="true"
                    prop="course"
                    label="课程"
                    width="140">
                </el-table-column>
                <el-table-column
                    sortable="true"
                    prop="academy"
                    label="学院"
                    width="140">
                </el-table-column>
                <el-table-column
                    sortable="true"
                    prop="major"
                    label="专业"
                    width="140">
                </el-table-column>
                <el-table-column
                    sortable="true"
                    prop="score"
                    label="分数"
                    width="80">
                </el-table-column>



            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    name: "score",
    data(){
        return{
            tableData: [
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'应用数学',
                    score:'60',

                }, {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'应用数学',
                    score:'60',

                },  {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'应用数学',
                    score:'60',

                },{
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'应用数学',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'应用数学',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'应用数学',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'应用数学',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'应用数学',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'应用数学',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'应用数学',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'应用数学',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'应用数学',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'应用数学',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'应用数学',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'应用数学',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'应用数学',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'应用数学',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    academy:'理学院',
                    major:'应用数学',
                    score:'60',

                }
            ]
        }

    }
}
</script>

<style scoped>
.header{
    height: 60px;
    margin-bottom: 10px;
}
span{
    font-size: 30px;
    font-weight: bold;
    line-height: 80px;
}
.output{
    float: right;
    margin: 20px 10px 0 0;
}
</style>