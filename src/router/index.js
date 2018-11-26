import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
import statistical from '@/components/statistical'
import classesList from '@/components/departManeger/classesList'
import editPlus from '@/components/departManeger/editPlus'
import stuInfo from '@/components/stuInfo'
import masterInfo from '@/components/masterInfo'
import editMember from '@/components/editMember'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children:[
        {
          path:'/statistical',
          name:'statistical',
          component:statistical
        },{
          path:'/classesList',
          name:'classesList',
          component:classesList
        },{
          path:'/editPlus',
          name:'editPlus',
          component:editPlus
        },{
          path:'/stuInfo',
          name:'stuInfo',
          component:stuInfo
        },{
          path:'/masterInfo',
          name:'masterInfo',
          component:masterInfo
        },{
          path:'/editMember',
          name:'editMember',
          component:editMember
        }
      ]
    }
  ]
})
