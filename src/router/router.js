import Vue from 'vue'
import Router from 'vue-router'

import Home from '../../src/components/Home'
import Interest from '../../src/components/Interest'
import Post from '../../src/components/Post'
import Profile from '../../src/components/Profile'

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/interest',
      name: 'Interest',
      component: Interest
    },
    {
      path: '/anpost',
      name: 'Post',
      component: Post
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      //props: true
    }
  ],
  mode: 'history'
})

export default router;