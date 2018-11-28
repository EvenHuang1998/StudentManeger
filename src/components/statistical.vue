<template>
  <div 
  class="contents" 
  v-loading="loading"
  element-loading-text="拼命加载中"
  >
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
         v-model="depart" 
         @change="chooseDepart"
         placeholder="请选择系"
         style="width:300px;">
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.label"
            :value="item.label">
          </el-option>
        </el-select>
      </template>
      <el-button class="first" type="primary" round @click="changeEdit">{{isEdit?'取消':'编辑'}}</el-button>
      <el-button type="info" round @click="changedelete">{{isDelete?'取消':'删除'}}</el-button>
    </div>
    <div class="cards">
      <el-card v-for="item in classList" :key="item.id" shadow="hover"  v-bind:class="{ active: isEdit }" @click.native="ToLink(item.classNum)">
        <i class="el-icon-error" v-show="isDelete" @click.stop="ToDelete"></i>
        <i class="el-icon-info">{{item.departName}}</i>
        <div class="info">{{item.classNum}}</div>
      </el-card>
      <el-card shadow="hover" @click.native="go">
        <img src="/static/plus.png" style="height:90px;width:90px;" />
      </el-card>
    </div>
  </div>
</template>

<script>
import {getDeparList,getDeparInfo} from '../API/API'
export default {
  data() {
    return {
      loading:false,
      depart:'',
      isEdit:false,
      isDelete:false,
      options:[
        {
            label:'通信工程',
            id:1
        },
        {
            label:'电子信息工程',
            id:2
        },
        {
            label:'计算机科学与技术',
            id:3
        },
        {
            label:'机电工程',
            id:4
        },
        {
            label:'微电子',
            id:5
        }
      ],
      classList:[
        {
          departName:'计算机科学与技术',
          classNum:1601011
        },{
          departName:'计算机科学与技术',
          classNum:1601012
        },{
          departName:'计算机科学与技术',
          classNum:1601013
        },{
          departName:'计算机科学与技术',
          classNum:1601014
        },{
          departName:'计算机科学与技术',
          classNum:1601015
        },{
          departName:'计算机科学与技术',
          classNum:1601016
        }
      ]
    }
  },
  components:{

  },
  mounted:function(){
      //首屏加载系的列表
      getDeparList(this).then((res)=>{
          console.log(res)
      },(err)=>{

      })
  },
  methods:{
    go(){
      this.$store.commit('change','editPlus')
      this.$router.push('/editPlus')
    },
    changeEdit(){
      this.isEdit = !this.isEdit
    },
    changedelete(){
      this.isDelete = !this.isDelete
    },
    ToDelete(){
      console.log('delete')
    },
    chooseDepart(){
      this.loading = true
      //选中系后加载该系信息
      getDeparInfo(this).then((res)=>{
          console.log(res)
          this.loading = false
      },(err)=>{
          console.log(err)
      })
    },
    ToLink(key){
      this.$store.commit('change','classesList')
      this.$router.push({path: '/classesList', query: {selected: key}})
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
  .active:hover
  { 
    background-color:yellow;
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

