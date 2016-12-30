import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import login from '../modules/base/Login.vue'
import productList from '../modules/product/ProductList.vue'

const routes = [
  { path: '/foo', component: login },
  { path: '/bar', component: productList }
]

export default Router;