<template>
    <div class="score">
        <div class="header">
        <span>学生成绩表</span>
        <div class="import">
            <el-button type="success" icon="el-icon-top-right">导出成绩册</el-button>
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
                prop="score"
                label="分数"
                width="164">
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
                    score:'60',

                }, {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    score:'60',

                },  {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    score:'60',

                },{
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
                    score:'60',

                },
                {
                    name: '张三',

                    id:'15461349',
                    class:'31497647',
                    grade:'2022',
                    course:'C语言',
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