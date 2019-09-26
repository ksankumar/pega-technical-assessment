/**
 * index.js Created by sandy on 9/26/2019 5.28PM
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
  }, {
    path: '/spaces',
    name: 'Spaces',
    component: () => import(/* webpackChunkName: "spaces" */ '../views/Spaces.vue')
  }, {
    path: '/documents',
    name: 'Documents',
    component: () => import(/* webpackChunkName: "documents" */ '../views/Documents.vue')
  }, {
    path: '/bugs',
    name: 'Bugs',
    component: () => import(/* webpackChunkName: "bugs" */ '../views/Bugs.vue')
  }, {
    path: '/epics',
    name: 'Epics',
    component: () => import(/* webpackChunkName: "epics" */ '../views/Epics.vue')
  }, {
    path: '/user-story',
    name: 'UserStory',
    component: () => import(/* webpackChunkName: "epics" */ '../views/UserStory.vue')
  }, {
    path: '/goals',
    name: 'Goals',
    component: () => import(/* webpackChunkName: "goals" */ '../views/Goals.vue')
  }, {
    path: '/notifications',
    name: 'Notifications',
    component: () => import(/* webpackChunkName: "notifications" */ '../views/Notifications.vue')
  }, {
    path: '/my-applications',
    name: 'MyApplications',
    component: () => import(/* webpackChunkName: "my-applications" */ '../views/MyApplications.vue')
  }, {
    path: '/recents',
    name: 'Recent',
    component: () => import(/* webpackChunkName: "recents" */ '../views/Recents.vue')
  }, {
    path: '/cosmos-operator',
    name: 'CosmosOperator',
    component: () => import(/* webpackChunkName: "cosmos-operator" */ '../views/CosmosOperator.vue')
  }, {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }]
})
