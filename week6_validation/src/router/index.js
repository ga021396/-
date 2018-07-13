import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import userDetail from '@/components/userDetail'
import userFinish from '@/components/userFinish'
import userComfirm from '@/components/userComfirm'
import userPhoto from '@/components/userPhoto'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/userDetail',
      name: 'userDetail',
      component: userDetail
    },
    {
      path: '/userFinish',
      name: 'userFinish',
      component: userFinish
    },
    {
      path: '/userComfirm',
      name: 'userComfirm',
      component: userComfirm
    },
    {
      path: '/userPhoto',
      name: 'userPhoto',
      component: userPhoto
    }  
  ]
})
