import Vue from 'vue'
import VueRouter from 'vue-router'

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
    redirect:'/statistics/pay',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Statistics.vue'),
    children:[
      {
        path:'/statistics/pay',
        name:'pay',
        component:() => import('../views/statisticsView/Pay.vue')
      },
      {
        path:'/statistics/incoming',
        name:'incoming',
        component:() => import('../views/statisticsView/Incoming.vue')
      },
    ],
  },
  
  {
    path:'/label',
    name:'label',
    component:() => import('../views/Label.vue')
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
