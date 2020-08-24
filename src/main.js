import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import vueResource from 'vue-resource'
import orderDetails from './OrderDetailsFields.vue'

Vue.use(VueRouter);
Vue.use(vueResource);

Vue.component('orderDetails',orderDetails);

const router=new VueRouter({
  routes:routes,
  mode:'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
