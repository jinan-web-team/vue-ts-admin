import Vue from 'vue';
import Router, { Route } from 'vue-router';
import routes from './routes';

// store
// import store from '@/store';
// config
// import config from '@/config';

// 进度条
import NPgrogress from 'nprogress';
import 'nprogress/nprogress.css';

// tools工具方法
import tools from '@/libs/tools';
Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// 路由守卫，权限验证
router.beforeEach( (to: Route, from: Route, next) => {
  NPgrogress.start();
  if (to.matched.some((r) => r.meta.auth)) {
    // 这里暂时将cookie里是否存有token作为验证是否登录的条件
    // 请根据自身业务需要修改
    const token = '123';
    if (token) {
      next();
    } else {
      // 没有登录的时候跳转到登录界面
      // 携带上登陆成功之后需要跳转的页面完整路径
      next({
        name: 'login',
        query: {
          redirect: to.fullPath,
        },
      });
      // https://github.com/d2-projects/d2-admin/issues/138
      NProgress.done();
    }
  } else {
    // 不需要身份校验 直接通过
    next();
  }
});

// 后置钩子
router.afterEach((to: Route) => {
  NPgrogress.done();
  tools.setTitle(to.meta && to.meta.title);
});


export default router;
