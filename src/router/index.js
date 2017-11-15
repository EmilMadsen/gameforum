import Vue from 'vue'
import Router from 'vue-router'
import Games from '@/components/games/games.vue'
import Profile from '@/components/profile/profile.vue'
import Forums from '@/components/forums/forums.vue'
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
      path: '/profile',
      name: 'profile',
      component: Profile
    },

    {
      path: '/forums',
      name: 'forums',
      component: Forums
    },

    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
  ]
})
