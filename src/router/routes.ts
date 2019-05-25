import Vue, { VNode } from 'vue';
import { RouteConfig, Route } from 'vue-router';
import { IRouteItem } from '@/interface/routes';
import Layout from '@/layout';
import demo from './modules/demo';

// 主框架外
const frameOut: IRouteItem[] & RouteConfig[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: 'login' */'@/views/login/login.tsx'),
  },
];

// 主框架内
const frameIn: IRouteItem[] & RouteConfig[] = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'index',
        meta: {
          hidden: false,
        },
        component: require('@/views/Index/Index.vue'),
      },
    ],
  },
  {
    path: 'refresh',
    name: 'refresh',
    meta: {
      hidden: true,
    },
    component: {
      beforeRouteEnter(to: Route, from: Route, next: (arg0: (vm: Vue) => any) => void) {
        next((vm) => vm.$router.replace(from.fullPath));
      },
      render: (h: () => VNode) => h(),
    },
  },
  // 页面重定向 必须保留
  {
    path: 'redirect/:route*',
    name: 'redirect',
    meta: {
      hidden: true,
    },
    component: {
      beforeRouteEnter(to: Route, from: Route, next: (arg0: (vm: Vue) => void) => void) {
        next((vm: Vue) => vm.$router.replace(JSON.parse(from.params.route)));
      },
      render: (h: () => VNode) => h(),
    },
  },
  demo,
];

// 页面错误路由列表
const errorPage: IRouteItem[] & RouteConfig[] = [
  {
    path: '/error401',
    name: 'error401',
    component: require('@/views/error/error401.vue'),
  },
  {
    path: '*',
    name: 'error404',
    component: require('@/views/error/error404.vue'),
  },
];

// 侧边栏菜单路由列表
export const menuRoutesList = frameIn;

// 所有路由
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage,
];
