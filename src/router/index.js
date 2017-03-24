import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Index from '../pages/index/'
import About from '../pages/about/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children:[
        {
          path: '/about',
          component: About,
          meta: {auth: false}
        },
        {
          path: '/',
          component: Index,
          meta: {auth: false}
        }
      ]
    }
  ]
})
