<template>
    <div class="personal">
        <div class="header">
            <span>账户管理</span>
        </div>
        <div class="info">
            <p>我的头像：</p>
            <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                style="width: 178px"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img alt="admin" v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                     style="text-align: left"
                     class="demo-ruleForm">
                <el-form-item label="姓名" prop="name">
                    <el-input type="text" v-model="ruleForm.name" autocomplete="off" style="width: 200px"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="gender">
                    <el-radio v-model="ruleForm.gender" label="男">男</el-radio>
                    <el-radio v-model="ruleForm.gender" label="女">女</el-radio>
                </el-form-item>
                <el-form-item label="电话" prop="mobile">
                    <el-input type="text" v-model="ruleForm.mobile" autocomplete="off" style="width: 200px"></el-input>
                </el-form-item>
                <el-form-item label="旧密码" prop="oldPassword">
                    <el-input type="password" v-model="ruleForm.oldPassword" autocomplete="off" style="width: 200px"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="newPassword">
                    <el-input type="password" v-model="ruleForm.newPassword" autocomplete="off" style="width: 200px"></el-input>
                </el-form-item>
                <el-form-item label="确认新密码" prop="newPassword2">
                    <el-input type="password" v-model="ruleForm.newPassword2" autocomplete="off" style="width: 200px"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">确认修改</el-button>
                </el-form-item>
            </el-form>

        </div>
    </div>
</template>

<script>
export default {
    name: "personal",
    data() {
        let validateName = (rule, value, callback) => {
            if (value==='') {
                return callback(new Error('姓名不能为空'));
            }
            else{
                callback();
            }
        };
        let validateOldPassword = (rule, value, callback) => {
            if (!(this.ruleForm.newPassword==='')&&value==='') {
                return callback(new Error('密码不能为空'));
            }
            else{
                callback();
            }
        };
        let validateNewPass2 = (rule, value, callback) => {
            if (value !== this.ruleForm.newPassword) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {


            ruleForm: {
                name: '米线',
                gender:'男',
                mobile: '15247467934',
                oldPassword: '',
                newPassword: '',
                newPassword2: ''
            },
            rules: {
                name: [
                    {validator: validateName, trigger: 'blur'}
                ],
                oldPassword: [
                    {validator: validateOldPassword, trigger: 'blur'}
                ],
                newPassword2: [
                    {validator: validateNewPass2, trigger: 'blur'}
                ]
            },
            imageUrl: 'https://cdn.jsdelivr.net/gh/0Cherish/PicCould/img/202207232257314.png'
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }


    }
}
</script>

<style scoped>
.personal {
    border: black solid 1px;
    padding:0 30px;
}

.header span {
    font-size: 30px;
    font-weight: bold;
    line-height: 80px;
}

.info p {
    text-align: left;
    font-size: 18px;
}

.avatar-uploader {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}

.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>