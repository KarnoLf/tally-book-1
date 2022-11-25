import Vue from 'vue'
import VueRouter from 'vue-router'
import editLabel from '../components/labelComponents/editLabel.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path:'/home',
    name:'home',
    component: ()=>import('../views/Home.vue')
  },
  {
    path: '/statistics',
    name: 'statistics',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Statistics.vue')
  },
  {
    path:'/label',
    name:'label',
    component:() => import('../views/Label.vue')
  },
  {
    path:'/label/edit/:id',
    name:'editLabel',
    component:editLabel
  },
  {
    path:'*',
    component:() => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 解决跳转重复路由报错问题
const originaPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  // 判断当前路由是否是要跳转的路由
  return originaPush.call(this, location).catch(err => err)
}

export default router
