import { Commit, ActionTree, MutationTree, Module } from 'vuex';
import { menuRoutesList } from '@/router/routes';
import { IRouteItem } from '@/interface/routes';
// import { getPermissionRoutes } from '@/libs/utils';
import router from '@/router';
import { APPROUTER } from '../types';

interface IRouterState {
  permissionRouteList: IRouteItem[];
  menuRoutes: IRouteItem[];
  rules: string | boolean | string[];
}

const state: IRouterState = {
  permissionRouteList: [],
  menuRoutes: [],
  rules: 'admin',
};

const actions: ActionTree<IRouterState, any> = {
  concatRoute(
    context: { commit: Commit; state: IRouterState },
    rules: boolean | string[] | string,
  ): Promise<IRouteItem[]> {
    return new Promise((resolve, reject) => {
      try {
        const routeList: IRouteItem[] = [];
        // routeList = getPermissionRoutes(menuRoutesList, rules);
        // router.addRoutes(routeList);
        context.commit(APPROUTER, routeList);
      } catch (error) {
        reject(error);
      }
    });
  },
};

const mutations: MutationTree<IRouterState> = {
  [APPROUTER](state: IRouterState, routeList: IRouteItem[]) {
    state.menuRoutes = routeList;
  },
};

const getters = {
  menuRoutes(state: IRouterState): IRouteItem[] {
    return state.menuRoutes;
  },
};

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters,
};
