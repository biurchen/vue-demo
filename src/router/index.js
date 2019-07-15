import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BlogList from '@/components/BlogList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/blogs', // http://localhost:8080/#/blogs
      name: 'BlogList',
      component: BlogList
    }
  ]
})
