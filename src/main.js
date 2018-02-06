// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Home from '@/components/Home'
import router from './router'
import VueFire from 'vuefire';

Vue.config.productionTip = false

Vue.use(VueFire);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#home',
  router,
  components: { Home },
  template: '<Home/>'
})
