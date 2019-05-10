import Vue from 'vue';
import Router, {Route, Location} from 'vue-router';
import { getUserPermissionInfo } from '@/api/user';

// store
import store from '@/store';
// config
import config from '@/config';

// 路由配置
import routes, { menuRoutesList } from './routes';
import headerMenu from '@/router/config/menu/header-menu';
import siderMenu from '@/router/config/menu/sider-menu';
import DynamicComponents from './config/components';
import IPermissionRouter from './config/menu/interface-permission';
import IMenu from './config/menu/interface-menu';

// 进度条
import NPgrogress from 'nprogress';
import 'nprogress/nprogress.css';

// tools工具方法
import tools from '@/libs/tools';
Vue.use(Router);

// 含有权限的路由菜单
let permissionMenu: IMenu[] = [];
// 含有权限的路由列表
let permissionRouter: IPermissionRouter[] = [];
// 标记是否已经拉取权限信息
let isFetchPermissionInfo = false;

// 获取权限信息
const permission: { functions: string[], roles: string[], isAdmin: boolean } = {
  functions: [],
  roles: [],
  isAdmin: false,
};

// 获取设置权限信息，用户信息，以及路由列表， 菜单导航信息
const fetchPermissionInfo = async () => {
  // 处理动态添加的路由
  const formatRoutes = (routes: IPermissionRouter[]) => {
    routes.forEach((route: IPermissionRouter) => {
      // @ts-ignore
      route.component = DynamicComponents[route.component];
      if (route.children) {
        formatRoutes(route.children);
      }
    });
  };
  try {
    const response = await getUserPermissionInfo();
    const data = response.data && response.data.data;
    permissionMenu = data.accessMenus;
    permissionRouter = data.accessRoutes;
    permission.functions = data.userPermissions;
    permission.roles = data.userRoles;
    permission.isAdmin = Number(data.isAdmin) === 1;
    console.log(permissionMenu);
  } catch (e) {
    console.log(e);
  }
  formatRoutes(permissionRouter);
  const MenuSider = [...siderMenu, ...permissionMenu];
  const MenuHeader = [...headerMenu, ...permissionMenu];
  // 处理路由 得到每一级的路由设置
  store.commit('page/init', [...menuRoutesList, ...permissionRouter]);
  // 设置顶栏菜单
  store.commit('menu/headerSet', MenuHeader);
  // 设置侧边栏菜单
  store.commit('menu/fullAsideSet', MenuSider);
  // 初始化菜单搜索功能
  store.commit('search/init', MenuHeader);
  // 设置权限信息
  store.commit('permission/set', permission);
  // 加载上次退出时的多页列表
  store.dispatch('page/openedLoad');
  await Promise.resolve();
};

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// 路由守卫，权限验证
router.beforeEach(async (to: Route, from: Location, next) => {
  NPgrogress.start();
  const { whiteList } = config;
  if (!whiteList.includes(to.path)) {
    const token: string = '123';
    if (token && token !== 'undefined') {
      if (!isFetchPermissionInfo) {
        await fetchPermissionInfo();
        isFetchPermissionInfo = true;
        next({ ...to, replace: true });
      } else {
        next();
      }
    } else {
      next({
        name: 'login',
      });
    }
  } else {
    next();
  }
});

// 后置钩子
router.afterEach((to: Route) => {
  NPgrogress.done();
  // const app = router.app;
  // const { name, params, query } = to;
  tools.setTitle(to.meta.title);
});


export default router;
