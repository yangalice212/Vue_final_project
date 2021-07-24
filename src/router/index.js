import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue'),
    children: [
      {
        path: '',
        name: 'about',
        component: () => import('../views/front/About.vue'),
      },
      {
        path: '/products',
        name: 'products',
        component: () => import('../views/front/Products.vue'),
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import('../views/front/Product.vue'),
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/front/Cart.vue'),
      },
      {
        path: '/checkout',
        name: 'checkout',
        component: () => import('../views/front/Checkout.vue'),
      },
      {
        path: '/check/:order',
        name: 'check',
        component: () => import('../views/front/Check.vue'),
      },
      {
        path: '/finish/:order',
        name: 'finish',
        component: () => import('../views/front/Finish.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'Adminproducts',
        component: () => import('../views/dashboard/Products.vue'),
      },

      {
        path: 'orders',
        name: 'orders',
        component: () => import('../views/dashboard/Orders.vue'),
      },
      {
        path: 'coupon',
        name: 'coupon',
        component: () => import('../views/dashboard/Coupons.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
