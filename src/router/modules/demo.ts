import { RouteConfig } from 'vue-router';
import { IRouteItem } from '@/interface/routes';
import Layout from '@/layout';

const demo: RouteConfig & IRouteItem = {
  path: '/demo',
  name: 'demo',
  redirect: { name: 'Page1' },
  component: Layout,
  children: [
    {
      path: 'page1',
      name: 'Page1',
      component: () => import(/* webpackChunkName: 'page-1' */ '@/views/demo/page1.vue'),
    },
    {
      path: 'page2',
      name: 'Page2',
      component: () => import(/* webpackChunkName: 'page-2' */ '@/views/demo/page2.vue'),
    },
    {
      path: 'page3',
      name: 'Page3',
      component: () => import(/* webpackChunkName: 'page-3' */ '@/views/demo/page3.vue'),
    },
    {
      path: 'Page4',
      name: 'Page4',
      component: () => import(/* webpackChunkName: 'page-3' */ '@/views/demo/page4.vue'),
    },
  ],
};

export default demo;

