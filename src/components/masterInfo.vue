<template>
  <div class="contents">
    <div class="picker">
      <template>
        <el-select
         placeholder="请选择专业"
         style="width:300px;">
          <el-option>
          </el-option>
        </el-select>
      </template>
      <el-button class="first" type="primary" round>编辑</el-button>
      <el-button type="info" round>删除</el-button>
    </div>
    <div class="cards">
      <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <i class="el-icon-error"></i>
        <img src="../static/1.jpg" class="image" @click="addList"/>
        <div class="info" @click="addList">java协会</div>
        <div class="info" @click="addList">1603011</div>
      </el-card>
      <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <i class="el-icon-error"></i>
        <img src="../static/1.jpg" class="image" @click="addList"/>
        <div class="info" @click="addList">java协会</div>
        <div class="info" @click="addList">1603011</div>
      </el-card>
      <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <i class="el-icon-error"></i>
        <img src="../static/1.jpg" class="image" @click="addList"/>
        <div class="info" @click="addList">java协会</div>
        <div class="info" @click="addList">1603011</div>
      </el-card>
      <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <i class="el-icon-error"></i>
        <img src="../static/1.jpg" class="image" @click="addList"/>
        <div class="info" @click="addList">java协会</div>
        <div class="info" @click="addList">1603011</div>
      </el-card>
      <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <i class="el-icon-error"></i>
        <img src="../static/1.jpg" class="image" @click="addList"/>
        <div class="info" @click="addList">java协会</div>
        <div class="info" @click="addList">1603011</div>
      </el-card>
      <el-card class="add" shadow="hover">
        <img src="/static/plus.png" style="height:200px;width:200px;" @click="addList"/>
      </el-card>
    </div>
    <el-dialog
        title="编辑学生信息"
        :visible.sync="centerDialogVisible"
        width="40%"
        center>
        <el-form :model="form" label-width="80px">
                <el-form-item label="学生姓名">
                    <el-input v-model="form.name" :disabled="true"></el-input>
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
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" plain @click="open">确 定</el-button>
            <el-button @click="centerDialogVisible = false">取 消</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
        centerDialogVisible:false,
        form: {
          name: '',
          room:'',
          number:'',
          date:''
        },
        student:[
            {
                name:'李明',
                age:18,
                classnum:1603013,
                stunum:16030130001
            },
            {
                name:'张三',
                age:18,
                classnum:1603013,
                stunum:16030130002
            },
            {
                name:'王五',
                age:18,
                classnum:1603013,
                stunum:16030130003
            }
        ]
    }
  },
  components:{
  },
  methods:{
    go(){
      this.$router.push('/editPlus')
    },
    addList(){
      console.log('aa')
      this.centerDialogVisible = true
    },
    open(){
      this.centerDialogVisible = false
      this.$notify({
        title: '提示',
        message: '信息修改成功',
        position: 'top-left',
        type: 'success',
        duration: 3500
      });
    }
  }
}
</script>

<style scoped>
  .picker{
    margin-top:50px;
  }
  .contents{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .cards{
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    margin-top: 50px;
    width: 80vw;
  }
  .info{
    width: 100%;
    text-align: center;
    font-size: 25px;
    font-weight: bolder
  }
  .el-card{
    position: relative;
    width: 330px;
    height: 250px;
    margin:20px;
    text-align: center;
  }
  .el-icon-error{
    color: #db1616;
    top: 0;
    right: 0;
    position: absolute;
  }
  .information{
    padding-bottom: 20px;
    border-bottom: 1px solid black;
  }
  .first{
    margin:0 16px 0 70px;
  }
  .image{
      height:170px;
      width: 100%;
  }
  .add{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

