import Vue from 'vue';
import VueRouter from 'vue-router';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';

import CreateListView from '../views/CreateListView';

Vue.use(VueRouter); 

export const router = new VueRouter({
  mode : 'history', 
  routes : [
    {
      path : '/',
      redirect : '/news'
    },
    {
      path: '/news',
      name: 'news',
      //component:NewsView,
      component: CreateListView('NewsView')
      // beforeEnter : (to, from, next) => {
      //   console.log('to', to);
      //   console.log('from', from);
      //   console.log('next', next); 
      // },
    },
    {
      path: '/ask',
      name: 'ask',
      //component:AskView,
      component: CreateListView('AskView')
    },
    {
      path: '/jobs',
      name : 'jobs',
      //component:JobsView,
      component: CreateListView('JobsView')
    },
    {
      path:'/item',
      component : ItemView
    },
    {
      path:'/user/:id',
      component : UserView
    },
    {
      path:'/item/:id',
      component : ItemView
    }
  ]
});