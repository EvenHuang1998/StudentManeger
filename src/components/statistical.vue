<template>
  <div class="contents">
    <div class="information">
      <table>
        <tr>
          <td>
            所在院系：计算机科学与技术
          </td>
          <td>办公地址：行政楼111</td>
          <td>
            系号：1603000
          </td>
        </tr>
        <tr>
          <td>
            学院人数：630人
          </td>
        </tr>
      </table>
    </div>
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
      <el-card shadow="hover">
        <i class="el-icon-error"></i>
        <i class="el-icon-info"> 计算机科学与技术</i>
        <div class="info">1603011</div>
      </el-card>
      <el-card shadow="hover">
        <i class="el-icon-error"></i>
        <i class="el-icon-circle-plus"> 计算机科学与技术</i>
        <div class="info">1603012</div>
      </el-card>
      <el-card shadow="hover">
        <i class="el-icon-error"></i>
        <i class="el-icon-success"> 计算机科学与技术</i>
        <div class="info">1603013</div>
      </el-card>
      <el-card shadow="hover">
        <i class="el-icon-error"></i>
        <i class="el-icon-star-on"> 计算机科学与技术</i>
        <div class="info">1603014</div>
      </el-card>
      <el-card shadow="hover">
        <i class="el-icon-error"></i>
        <i class="el-icon-star-on"> 计算机科学与技术</i>
        <div class="info">1603018</div>
      </el-card>
      <el-card shadow="hover">
        <i class="el-icon-error"></i>
        <i class="el-icon-star-on"> 计算机科学与技术</i>
        <div class="info">1603019</div>
      </el-card>
      <el-card shadow="hover">
        <img src="/static/plus.png" style="height:90px;width:90px;"  @click="go"/>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components:{
  },
  methods:{
    go(){
      this.$router.push('/editPlus')
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
    width: 48vw;
    margin-top:30px;
  }
  tr{
    height:30px;
  }
</style>

