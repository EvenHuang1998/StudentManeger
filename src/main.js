// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import Vuex from 'vuex'
Vue.prototype.$axios = axios

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    pageClicked:''
  },
  mutations:{
    change(s,url){
      console.log(url)
      this.state.pageClicked = url
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  components: { App },
  template: '<App/>'
})

