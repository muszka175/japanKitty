import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import BootstrapVue from 'bootstrap-vue'
import VueAgile from 'vue-agile'
import vueSmoothScroll from 'vue-smooth-scroll'
import VeeValidate from 'vee-validate'

// Use vue-resource package
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueAgile);
Vue.use(vueSmoothScroll);
Vue.use(VeeValidate);

Vue.http.options.emulateJSON = true;

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
