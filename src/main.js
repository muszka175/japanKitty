import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import BootstrapVue from 'bootstrap-vue'
import VueAgile from 'vue-agile'
import vueSmoothScroll from 'vue-smooth-scroll'
import VeeValidate from 'vee-validate'
import VueSession from 'vue-session'

import authService from './services/authService';
// Use vue-resource package
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueAgile);
Vue.use(vueSmoothScroll);
Vue.use(VeeValidate);
Vue.use(VueSession);

//Vue.http.options.crossOrigin = true
Vue.http.options.root = 'http://localhost/api/';
//Vue.http.headers.common['Content-Type'] = 'application/json';

Vue.http.headers.common['Authorization'] = 'Bearer ' + authService.getToken();
// Vue.http.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8080'
//Vue.http.headers.common['X-Requested-With'] = 'XMLHttpRequest';
Vue.http.options.emulateJSON = true;
//Vue.http.options.emulateHTTP = true;

//

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
 /* http: {
    root: 'http://localhost/api/',
    headers: {
      Authorization: authService.getToken()
    }
  },*/
  el: '#app',
  render: h => h(App),
  router: router
})
