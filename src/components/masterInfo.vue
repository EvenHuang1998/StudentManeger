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
      <el-button class="first" type="info" round @click="changedelete">{{isDelete?'删除':'取消'}}</el-button>
    </div>
    <div class="cards">
      <el-card v-for="item in masterList" :key="item.id" shadow="hover"  v-bind:class="{ active: isEdit }"  :body-style="{ padding: '0px' }">
        <i class="el-icon-error" v-show="isDelete" @click="ToDelete"></i>
        <img src="../static/1.jpg" class="image" @click="addList"/>
        <div class="info" @click="addList">java协会</div>
        <div class="info" @click="addList">1603011</div>
      </el-card>
      <el-card class="add" shadow="hover">
        <img src="/static/plus.png" style="height:200px;width:200px;" @click="addList"/>
      </el-card>
    </div>
    <el-dialog
        title="编辑学会信息"
        :visible.sync="centerDialogVisible"
        width="40%"
        center>
        <el-form :model="form" label-width="80px">
                <el-form-item label="学会号">
                    <el-input v-model="form.name" :disabled="isEdit"></el-input>
                </el-form-item>
                <el-form-item label="学会名">
                    <el-input v-model="form.nunber" :disabled="isEdit"></el-input>
                </el-form-item>
                <el-form-item label="学会地点">
                    <el-input v-model="form.nunber" :disabled="isEdit"></el-input>
                </el-form-item>
                <el-form-item label="成立日期">
                    <div class="block">
                    <el-date-picker
                        type="date"
                        v-model="form.date"
                        placeholder="选择日期"
                         :disabled="isEdit"
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
        isEdit:false,
        isDelete:false,
        centerDialogVisible:false,
        form: {
          name: '',
          room:'',
          number:'',
          date:''
        },
        masterList:[
          {
            name:'Java协会',
            num:1603011
          },
          {
            name:'书画社',
            num:1603012
          },
          {
            name:'科创社',
            num:1603013
          },
          {
            name:'Java协会',
            num:1603011
          },
          {
            name:'Java协会',
            num:1603011
          },
          {
            name:'Java协会',
            num:1603011
          }
        ],
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
    },
    changedelete(){
      this.isDelete = !this.isDelete
    },
    ToDelete(){
      console.log('delete')
    },
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
    font-weight: bolder;
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

