import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  
    {
      path: '/',
      name: 'home',
     
      component: () => import('./views/Home.vue')
    },
    {
      path: '/toypoodle',
      name: 'toypoodle',
      
      component: () => import('./views/toypoodle.vue')
    },
    {
      path: '/chihuahua',
      name: 'chihuahua',
      
      component: () => import('./views/chihuahua.vue')
    },
    {
      path: '/shibainu',
      name: 'shibainu',
      
      component: () => import('./views/shibainu.vue')
    },
    {
      path: '/pomeranian',
      name: 'pomeranian',
      
      component: () => import('./views/pomeranian.vue')
    },
    {
      path: '/miniature_dachshund',
      name: 'miniature_dachshund',
      
      component: () => import('./views/miniature_dachshund.vue')
    },
    {
      path: '/corgi',
      name: 'corgi',
      
      component: () => import('./views/corgi.vue')
    },
    {
      path: '/shih_tzu',
      name: 'shih_tzu',
      
      component: () => import('./views/shih_tzu.vue')
    },
    {
      path: '/yorkshire_terrier',
      name: 'yorkshire_terrier',
      
      component: () => import('./views/yorkshire_terrier.vue')
    },
    {
      path: '/miniature_schnauzer',
      name: 'miniature_schnauzer',
      
      component: () => import('./views/miniature_schnauzer.vue')
    },
    {
      path: '/puppy',
      name: 'puppy',
      
      component: () => import('./views/puppy.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      
      component: () => import('./views/contact.vue')
    }
  ]
});
