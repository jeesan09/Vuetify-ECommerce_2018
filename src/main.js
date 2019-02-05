import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate';
import VueSweetalert2 from 'vue-sweetalert2';
 
Vue.use(VueSweetalert2);//this is sweetAlart implimentation

Vue.use(VeeValidate); //this is VeeValidate implimentation


//hellow js implimentation

const HelloJs = require('hellojs/dist/hello.all.min.js');
const VueHello = require('vue-hellojs');

HelloJs.init({
  google:"409728095887-d1b1ge29fud8g2o6p5ch3ds1g3g3kuqv.apps.googleusercontent.com",
  facebook: 328543327783581
}, {
  redirect_uri: 'authcallback/'
});
Vue.use(VueHello, HelloJs);
 
//--------hellow js----------

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
