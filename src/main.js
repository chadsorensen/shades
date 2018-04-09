// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'
import { MdTabs, MdButton, MdIcon, MdEmptyState, MdList, MdSubheader } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import router from './router'
Vue.use(MdTabs);
Vue.use(MdButton);
Vue.use(MdIcon);
Vue.use(MdEmptyState);
Vue.use(MdList);
Vue.use(MdSubheader);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
