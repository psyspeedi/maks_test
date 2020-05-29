import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/slider',
    name: 'Slider',
    component: () => import('../components/Slider.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../components/News.vue')
  },
  {
    path: '/news/detail/:id',
    name: 'NewsDetail',
    component: () => import('../components/NewsDetail.vue')
  },
  {
    path: '/trainer',
    name: 'Trainers',
    component: () => import('../components/Trainers.vue')
  },
  {
    path: '/user/:id',
    name: 'User',
    meta: {auth: true},
    component: () => import('../components/User.vue')
  },
  {
    path: '*',
    redirect: '/slider'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  await store.dispatch('fetchUser')
  const requiredAuth = to.matched.some(record => record.meta.auth)

  if (!store.state.user.isLogin && requiredAuth) {
    next('/')
  } else {
    next()
  }
})

export default router
