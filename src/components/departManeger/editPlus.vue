<template>
<div class="content">
  <div class="myForm">
  <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="所在系">
        <el-input v-model="form.depart"></el-input>
      </el-form-item>
      <el-form-item label="专业名称">
        <el-input v-model="form.name" @change="changes"></el-input>
      </el-form-item>
      <el-form-item label="班号">
        <el-input v-model="form.nunber"></el-input>
      </el-form-item>
      <el-form-item label="宿舍区">
        <el-input v-model="form.room"></el-input>
      </el-form-item>
      <el-form-item label="入学日期">
        <div class="block">
          <el-date-picker
              type="date"
              v-model="form.date"
              placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="onSubmit">提交修改</el-button>
          <el-button>清空</el-button>
      </el-form-item>
  </el-form>
</div>
</div>
</template>
<script>
  import qs from 'qs'
  export default {
    data() {
      return {
        form: {
          name: '',
          room:'',
          number:'',
          date:'',
          depart:''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log(qs.stringify(this.form))
        var config = {
          // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          method: 'post'
        };
        this.$axios.post('/api',qs.stringify(this.form),config)
        .then((response) => {
          console.log(response)
        })
        .catch((response) => {
          console.log('response')
        })
        // this.$axios.get('/api',{params:this.form},config)
        // .then((response) => {
        //   console.log(response)
        // })
        // .catch((response) => {
        //   console.log('response')
        // })
      },
      changes(){
        
      }
    }
  }
</script>
<style scoped>
.el-form{
    width: 40vw;
    margin-top: 50px;
}
.content{
    display: flex;
    justify-content: center
}
.el-form-item{
    margin-right: 50px;
}
</style>


