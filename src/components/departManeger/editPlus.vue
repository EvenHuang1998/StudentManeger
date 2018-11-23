<template>
<div class="content">
    <div class="myForm">
    <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="专业名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="班号">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="宿舍区">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="入学日期">
    <div class="block">
    <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期">
    </el-date-picker>
    </div>
  </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
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
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
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


