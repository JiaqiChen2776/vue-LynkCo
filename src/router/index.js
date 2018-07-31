import Vue from 'vue'
import Router from 'vue-router'
import News from '@/components/News/News'
import Activities from '@/components/Activities/Activities'
import Mall from '@/components/Mall/Mall'
import Login from '@/components/Login/Login'
import Home from '@/components/Home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/activities',
      name: 'activities',
      component: Activities
    },
    {
      path: '/mall',
      name: 'mall',
      component: Mall
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        keepAlive: true
      }
    }
  ]
})
