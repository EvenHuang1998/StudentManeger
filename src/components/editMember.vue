<template>
  <div class="contents">
    <div class="information">
      <table>
        <tr>
          <td>
            学会名：JAVA协会
          </td>
          <td>学会号：20160004</td>
          <td>
            成立年份：2016
          </td>
        </tr>
        <tr>
          <td>
            地点：丁香11号楼
          </td>
          <td>
            人数：50人
          </td>
        </tr>
      </table>
    </div>
    <div class="picker">
      <template>
        <el-select placeholder="请选择协会名">
          <el-option>
          </el-option>
        </el-select>
      </template>
      <el-button class="first1" type="success" round @click="addList">新增</el-button>
    </div>
    <template>
            <el-table
                :data="student"
                style="width: 60vw"
                @row-click="theList"
                >
                <el-table-column
                width='80'
                label="序号"
                type="index">
                </el-table-column>
                <el-table-column
                width='150'
                prop="name"
                label="姓名">
                </el-table-column>
                <el-table-column
                width="100"
                prop="age"
                label="年龄">
                </el-table-column>
                <el-table-column
                prop="classnum"
                label="班号">
                </el-table-column>
                <el-table-column
                prop="stunum"
                label="学号">
                </el-table-column>
            </el-table>
        </template>
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
            <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
            <el-button @click="centerDialogVisible = false">取 消</el-button>
        </span>
        </el-dialog>
        <el-dialog
        title="新增学生"
        :visible.sync="centerDialogVisible2"
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
            <el-button type="primary" @click="centerDialogVisible2 = false">确 定</el-button>
            <el-button @click="centerDialogVisible2 = false">取 消</el-button>
        </span>
        </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
        centerDialogVisible:false,
        centerDialogVisible2:false,
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
      theList(row,event){
          console.log(row)
          this.centerDialogVisible = true
      },
      addList(){
          this.centerDialogVisible2 = true
      }
  }
}
</script>

<style scoped>
  .picker{
    margin-top:20px;
  }
  .picker .el-select{
      margin-left:40px;
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
    margin-top: 50px;
    width: 80%
  }
  .info{
    width: 100%;
    text-align: center;
    margin-top: 30px;
    font-size: 25px;
    font-weight: bolder
  }
  .el-card{
    position: relative;
    width: 200px;
    height: 120px;
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
  .first1{
    margin:0 10px 0 50px;
  }
</style>
<style>
  table{
    width: 60vw;
    margin-top:10px;
  }
  tr{
    height:30px;
  }
</style>

