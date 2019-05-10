import { Commit, ActionTree, MutationTree } from 'vuex';
import { LOGIN } from '@/store/types';
import { IUserForm } from '@/views/login/login';
import { AxiosResponse } from 'axios';
import { ILoginResponseData, authlogin } from '@/api/user';
import {IResponse} from '@/plugins/axios';

interface IUserState {
  token: string;
  permission: string[] | boolean | string;
  username: string;
  exp: number;
}

const state: IUserState = {
  token: '',
  permission: [],
  username: '',
  exp: 7,
};

const actions: ActionTree<IUserState, any> = {
  sendLogin(context: { commit: Commit }, params: IUserForm): Promise<AxiosResponse<IResponse<ILoginResponseData>>> {
    return new Promise(async (resolve, reject) => {
      const res = await authlogin(params);
      if (res) {
        context.commit(LOGIN);
        resolve(res);
      }
    });
  },
};

const mutations: MutationTree<IUserState> = {
  [LOGIN](state: ILoginResponseData, res: AxiosResponse<IResponse<ILoginResponseData>>) {
    const { data: { success, status, rows } } = res;
    if (success && status === 101) {
      state.permission = rows.permission;
      state.exp = rows.exp;
      state.token = rows.token;
      state.username = rows.username;
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
