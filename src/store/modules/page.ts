import { Commit, MutationTree, Module } from 'vuex';
import IPermissionRouter from '@/router/config/menu/interface-permission';

interface IPage {
  pool: IPool[];
}

interface IPool {
  meta: {
    title: string;
    cache?: boolean;
    hidden?: boolean;
  };
  name: string;
  path: string;
}

const state: IPage = {
  pool: [],
};

const mutations: MutationTree<IPage> = {
  /**
   * @class pool
   * @description 保存 pool (候选池)
   * @param {Object} state vuex state
   * @param {Array} routes routes
   */
  init(state: IPage, routes: IPermissionRouter[]): void {
    const pool: never[] | Array<{ meta: any; name: any; path: any; }> = [];
    const push = (routes: IPermissionRouter[]) => {
      routes.forEach((route) => {
        if (route.children) {
          push(route.children);
        } else {
          if (!route.meta.hidden) {
            // const { meta, name, path } = route;
            // pool.push({ meta, name, path });
          }
        }
      });
    };
    push(routes);
    state.pool = pool;
  },
};

export default {
  namespaced: true,
  mutations,
  state,
};
