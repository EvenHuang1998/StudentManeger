<template>
    <div class="stuInfo">
        <div class="myForm">
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="学生姓名">
                    <el-input v-model="form.name" :disabled="isChange"></el-input>
                </el-form-item>
                <el-form-item label="所在班级">
                    <el-input v-model="form.nunber" :disabled="isChange"></el-input>
                </el-form-item>
                <el-form-item label="专业">
                    <el-input v-model="form.nunber" :disabled="isChange"></el-input>
                </el-form-item>
                <el-form-item label="宿舍区">
                    <el-input v-model="form.room" :disabled="isChange"></el-input>
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
                         :disabled="isChange"
                        >
                    </el-date-picker>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="clickChange">{{isChange?'点击修改':'取消修改'}}</el-button>
                    <el-button type="primary" @click="clickDelete">点击删除</el-button>
                    <el-button @click="onSubmit">{{!isChange?'点击提交':'取消'}}</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import {getStudentInfo,deleteStudentInfo,updateStudentInfo} from '../API/API'
import {messageBox,notification} from '../API/Toast'
export default {
    data() {
      return {
        isChange:true,
        form: {
          name: '',
          room:'',
          number:'',
          date:''
        }
      }
    },
    created:function(){
        var cur = this.$route.query.num
        if(cur == undefined){
            //用户没有输入参数
            let msg = "请先在统计中心选择您想要查询的具体学生"
            messageBox(this,this.$options.methods.toastCallBack,msg)
        } else{
            getStudentInfo(this,cur).then((res)=>{
            this.loading = false
        },(error)=>{
            let msg = "发生了错误，可能是网络异常，请稍后重试"
            messageBox(this,this.$options.methods.toastError,msg)
        })
        }
    },
    methods:{
        onSubmit(){
            if(!this.isChange){
                updateStudentInfo(this,'update').then((res)=>{
                    notification(this,'更新成功！！')
                    this.isChange = true
                },(err)=>{
                    console.log(err)
                })
            }
        },
        toastCallBack(){
            this.$message.error('请选择您需要修改的具体学生');
            this.$router.push('/statistical')
        },
        toastError(){
            this.$message.error('发生了错误，可能是网络异常，请稍后重试')
            this.$router.push('/statistical')
        },
        clickChange(){
            this.isChange = !this.isChange
        },
        clickDelete(){
            var msg = '您确定要取消吗？'
            messageBox(this,this.$options.methods.deleteInfo,msg)
        },
        deleteInfo(){
            deleteStudentInfo(this,this.number).then((res)=>{
                console.log(res)
            })
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
