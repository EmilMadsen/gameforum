import Vue from 'vue'
import Router from 'vue-router'
import Games from '@/components/games/games.vue'
import Profile from '@/components/profile/profile.vue'
import Posts from '@/components/posts/posts.vue'



Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/games' },

    {
      path: '/games',
      name: 'games',
      component: Games
    },

    {
      path: '/profile/:id',
      name: 'profile',
      component: Profile
    },

    {
      path: '/posts/:id',
      name: 'posts',
      component: Posts
    },

  ]
})
