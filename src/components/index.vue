<template>
	<div class="manage_page fillcontain">
    <el-col :span="4" style="height: 100vh;background-color:#545c64">
        <el-menu
        :default-active=index
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router>
        <el-menu-item index="statistical">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">统计中心</span>
        </el-menu-item>
        <el-menu-item index="classesList">
            <i class="el-icon-warning"></i>
            <span slot="title">查看班级</span>
        </el-menu-item>
        <el-menu-item index="editPlus">
            <i class="el-icon-setting"></i>
            <span slot="title">编辑、新建</span>
        </el-menu-item>
        </el-menu>
    </el-col>
    <el-col :span="20">
        <header-top></header-top>
        <router-view></router-view>
    </el-col>
    </div>
</template>

<script>
import headerTop from "@/components/headerTop";
export default {
  data(){
      return{
        index:'statistical'
      }
  },
  name: 'index',
  components: {
      headerTop
  },
  mounted () {
    let arr = window.location.href.toString().split('/')
    this.index = arr[arr.length - 1]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>