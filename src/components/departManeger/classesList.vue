<template>
  <div class="contents">
    <div class="information">
      <table>
        <tr>
          <td>
            所在系：计算机科学与技术系
          </td>
          <td>专业名：计算机科学与技术</td>
          <td>
            班号：1603011
          </td>
        </tr>
        <tr>
          <td>
            宿舍区：丁香11号楼
          </td>
          <td>人数：11人</td>
          <td>
            入校年份：2016.09.01
          </td>
        </tr>
      </table>
    </div>
    <div class="picker">
      <template>
        <el-select placeholder="请选择专业">
          <el-option>
          </el-option>
        </el-select>
      </template>
      <template>
        <el-select placeholder="请选择班级">
          <el-option>
          </el-option>
        </el-select>
      </template>
    </div>
    <template>
            <el-table
                :data="student"
                style="width: 60vw">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
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

