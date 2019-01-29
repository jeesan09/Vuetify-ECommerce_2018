import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import registation from './components/registation.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
     // redirect:{path:'/about'}
    },
    {
      path: '/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },

    {

      path: '/registation',
      name: 'registation',
      component: registation


    }
  ]
})
