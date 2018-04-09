import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/Homepage/index'
// import Shades from '@/components/Shades'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    }
  ]
})
