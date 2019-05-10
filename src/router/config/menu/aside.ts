import { IRouteItem } from '@/interface/routes';
// 菜单 侧边菜单栏
const asideMenu: IRouteItem[] = [
  {
    path: '/index',
    name: 'Index',
    meta: {
      title: '首页',
      icon: 'home',
    },
  },
  {
    path: '/aa',
    name: 'demo',
    meta: {
      title: 'a',
      icon: 'folder-o',
    },
    children: [
      {
        path: 'c',
        name: 'Page1',
        meta: {
          title: '页面 1',
        },
      },
    ],
  },
  {
    path: '/demo',
    name: 'demo',
    meta: {
      title: '演示页面',
      icon: 'folder-o',
    },
    children: [
      {
        path: 'page1',
        name: 'Page1',
        meta: {
          title: '页面 1',
        },
      },
      {
        path: 'page2',
        name: 'Page2',
        meta: {
          title: '页面 2',
        },
      },
      {
        path: 'page3',
        name: 'Page3',
        meta: {
          title: '页面 3',
        },
      },
      {
        path: 'page4',
        name: 'Page4',
        meta: {
          title: '页面 4',
        },
      },
    ],
  },
];

export default asideMenu;
