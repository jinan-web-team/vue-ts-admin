// 侧边栏菜单
import IMenu from './interface-menu';

const siderMenu: IMenu[] = [
  {
    path: '/index',
    title: '首页',
    icon: '',
  },
  {
    path: '/demo',
    title: '演示页面',
    children: [
      {
        path: '/demo/page1',
        title: '页面一',
      },
      {
        path: '/demo/page2',
        title: '页面二',
      },
      {
        path: '/demo/page2',
        title: '页面三',
      },
      {
        title: '嵌套二级',
        path: 'page4',
        children: [
          {
            path: '/demo/page4',
            title: '页面三',
          },
        ],
      },
    ],
  },
];

export default siderMenu;
