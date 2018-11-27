<template>
	<div class="manage_page fillcontain">
    <el-col :span="4" style="position:fixed;height: 100vh;background-color:#545c64">
        <el-menu
        :default-active="index"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router>
            <el-menu-item index="statistical">
                <i class="el-icon-view"></i>
                <span slot="title">统计中心</span>
            </el-menu-item>
            <el-menu-item index="classesList">
                <i class="el-icon-warning"></i>
                <span slot="title">查看班级</span>
            </el-menu-item>
            <el-menu-item index="editPlus">
                <i class="el-icon-setting"></i>
                <span slot="title">编辑、新建班级</span>
            </el-menu-item>
            <el-menu-item index="stuInfo">
                <i class="el-icon-edit"></i>
                <span slot="title">学生信息</span>
            </el-menu-item>
            <el-menu-item index="masterInfo">
                <i class="el-icon-document"></i>
                <span slot="title">学会信息</span>
            </el-menu-item>
            <el-menu-item index="editMember">
                <i class="el-icon-edit-outline"></i>
                <span slot="title">编辑学会成员</span>
            </el-menu-item>
        </el-menu>
    </el-col>
    <el-col :span="4">
        <span class="ocupy">占位符</span>
    </el-col>
    <el-col class="right" :span="20">
        <header-top></header-top>
        <router-view></router-view>
    </el-col>
    </div>
</template>

<script>
import headerTop from "@/components/headerTop";
import Bus from '@/assets/other'
export default {
  data(){
      return{
        index:this.$store.state.pageClicked
      }
  },
  watch: {
    index(newName, oldName) {
      console.log(newName,oldName)
    }
  } ,
  components: {
      headerTop
  },
  mounted () {
    let arr = window.location.href.toString().split('/')
    this.index = arr[arr.length - 1]
    this.$store.commit('change',this.index)
  }
}
</script>

<style scoped>
.ocupy{
    visibility: hidden;
}
</style>