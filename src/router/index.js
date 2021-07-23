import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Index.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/front/About.vue'),
      },
      {
        path: '/products',
        component: () => import('../views/front/Products.vue'),
      },
      {
        path: '/product/:id',
        component: () => import('../views/front/Product.vue'),
      },
      {
        path: '/cart',
        component: () => import('../views/front/Cart.vue'),
      },
      {
        path: '/checkout',
        component: () => import('../views/front/Checkout.vue'),
      },
      {
        path: '/finish',
        component: () => import('../views/front/Finish.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/dashboard/Products.vue'),
      },

      {
        path: 'orders',
        component: () => import('../views/dashboard/Orders.vue'),
      },
      {
        path: 'coupon',
        component: () => import('../views/dashboard/Coupons.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
