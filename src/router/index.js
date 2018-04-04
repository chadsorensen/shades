import Vue from 'vue'
import Router from 'vue-router'
import Shades from '@/components/Shades'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Shades',
      component: Shades
    }
  ]
})
