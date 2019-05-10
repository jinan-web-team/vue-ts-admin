import { IRouteItem } from '@/interface/routes';
// 菜单 头部菜单栏
const headerMenu: IRouteItem[] = [
  {
    path: '/index',
    name: 'Index',
    meta: {
      title: '首页',
      icon: 'home',
    },
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
        path: '/demo/page1',
        name: 'Page2',
        meta: {
          title: '页面 1',
        },
      },
      {
        path: '/demo/page2',
        name: 'Page2',
        meta: {
          title: '页面 2',
        },
      },
      {
        path: '/demo/page3',
        name: 'Page3',
        meta: {
          title: '页面 3',
        },
      },
    ],
  },
];

export default headerMenu;
