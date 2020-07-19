import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/home'
// import Login from './pages/login'
import Index from './pages/index'
// import Product from './pages/product'
// import Detail from './pages/detail'
// import Cart from './pages/cart'
// import Order from './pages/order'
// import OrderList from './pages/orderList'
// import OrderConfirm from './pages/orderConfirm'
// import OrderPay from './pages/orderPay'
// import Alipay from './pages/alipay'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index', // query传参
          name: 'index',  // params传参
          component: Index
        },
        {
          path: '/product/:id',
          name: 'product',
          // component: Product
          // component: resolve => require(['./pages/index.vue'], resolve),
          component: () => import('./pages/product.vue')
        },
        {
          path: '/detail/:id',
          name: 'detail',
          // component: Detail
          // component: resolve => require(['./pages/detail.vue'], resolve),
          component: () => import('./pages/detail.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      // component: Login,
      // component: resolve => require(['./pages/login.vue'], resolve),
      component: () => import('./pages/login.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      // component: Cart,
      component: () => import('./pages/cart.vue')
    },
    {
      path: '/order',
      name: 'order',
      // component: Order,
      component: () => import('./pages/order.vue'),
      children: [
        {
          path: 'list',
          name: 'order-list',
          // component: OrderList
          component: () => import('./pages/orderList.vue')
        },
        {
          path: 'confirm',
          name: 'order-confirm',
          // component: OrderConfirm
          component: () => import('./pages/orderConfirm.vue')
        },
        {
          path: 'pay',
          name: 'order-pay',
          // component: OrderPay
          component: () => import('./pages/orderPay.vue')
        },
        {
          path: 'alipay',
          name: 'alipay',
          // component: Alipay
          component: () => import('./pages/alipay.vue')
        }
      ]
    },

  ]
});