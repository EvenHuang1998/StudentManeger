<template>
    <div class="stuInfo">
        <div class="myForm">
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="学生姓名">
                    <el-input v-model="form.name" @change="changes" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="所在班级">
                    <el-input v-model="form.nunber" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="专业">
                    <el-input v-model="form.nunber" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="宿舍区">
                    <el-input v-model="form.room" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="加入的学会">
                    <el-tag type="success">Java协会</el-tag>
                    <el-tag type="success">为之工作室</el-tag>
                    <el-tag type="success">校科协</el-tag>
                    <el-tag type="success">校团委</el-tag>
                </el-form-item>
                <el-form-item label="入学日期">
                    <div class="block">
                    <el-date-picker
                        type="date"
                        v-model="form.date"
                        placeholder="选择日期"
                         :disabled="true"
                        >
                    </el-date-picker>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">点击修改</el-button>
                    <el-button type="primary" @click="onSubmit">点击删除</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        form: {
          name: '',
          room:'',
          number:'',
          date:''
        }
      }
    }
}
</script>
<style scoped>
.el-form{
    width: 39vw;
    border: 1px solid #000;
    margin-top: 50px;
    padding: 30px 50px;
    border-radius: 8px;
    box-shadow:3px 3px 3px 3px #abcdef;
}
.stuInfo{
    display: flex;
    justify-content: center;
}
.el-form-item{
    margin-right: 50px;
}
</style>
