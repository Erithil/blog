import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import Preview from "./views/preview/Preview"
import Home from "./views/home/Home"
import Photo from "./views/home/photo/Photo";

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'photo',
          component:  Photo,
        },
      ]
    },
    {
      path: '/',
      name: 'preview',
      component: Preview,
    },
    {
      path: '/home',
      name: 'photo'
    }
  ]
})
