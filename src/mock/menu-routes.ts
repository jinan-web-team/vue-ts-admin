import IMenu from '@/router/config/menu/interface-menu';


const data: IMenu[] = [
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
export const permissionMenu: IMenu[] = [
         {
           path: '/system',
           title: '系统',
           icon: 'folder-o',
           children: [
             {
               path: 'system',
               title: '系统设置',
               icon: 'folder-o',
               children: [
                 {
                   path: '/system/menu',
                   title: '菜单管理',
                   icon: 'folder-o',
                 },
                 {
                   path: '/system/route',
                   title: '路由管理',
                   icon: 'folder-o',
                 },
                 {
                   path: '/system/role',
                   title: '角色管理',
                   icon: 'folder-o',
                 },
                 {
                   path: '/system/user',
                   title: '用户管理',
                   icon: 'folder-o',
                 },
                 {
                   path: '/system/interface',
                   title: '接口管理',
                   icon: 'folder-o',
                 },
               ],
             },
             {
               path: 'organization',
               title: '组织架构',
               icon: 'folder-o',
               children: [
                 {
                   title: '部门管理',
                   path: '',
                   icon: 'folder-o',
                 },
                 {
                   title: '职位管理',
                   path: '',
                   icon: 'folder-o',
                 },
               ],
             },
           ],
         },
       ];

export const permissionRouter = [
  {
    name: '系统设置',
    path: '/system',
    component: 'Layout',
    componentPath: 'layout/index',
    meta: {
      title: '系统设置',
    },
    children: [
      {
        name: 'MenuPage',
        path: '/system/menu',
        meta: {
          cache: true,
          title: '菜单管理',
        },
        component: 'menu',
        componentPath: 'views/menu/menu',
      },
      {
        name: 'RoutePage',
        path: '/system/route',
        meta: {
          cache: true,
          title: '路由管理',
        },
        component: 'route',
        componentPath: 'views/role/role',
      },
    ],
  },
];
