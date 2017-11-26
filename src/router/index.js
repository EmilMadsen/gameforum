import Vue from 'vue'
import Router from 'vue-router'
import Games from '@/components/games/games.vue'
import Profile from '@/components/profile/profile.vue'
import Posts from '@/components/posts/posts.vue'
import Comments from '@/components/comments/comment.vue'
import Login from '@/components/login/login.vue';



Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/login' },

    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/frontpage',
      name: 'frontpage',
      component: Games
    },

    {
      path: '/profile/:id',
      name: 'profile',
      component: Profile
    },

    {
      path: '/game/:id',
      name: 'game',
      component: Posts
    },

    {
      path: '/post/:id',
      name: 'post',
      component: Comments
    },

  ]
})
