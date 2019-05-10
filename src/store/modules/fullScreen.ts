import { ActionTree, Commit, MutationTree } from 'vuex';
import { SETSCREEN } from '../types';
const screenFull = require('screenfull');

interface IScreenFull {
  active: boolean;
}

const state: IScreenFull = {
  active: false,
};

const actions: ActionTree<IScreenFull, any> = {
  watchScreen(context: { commit: Commit }) {
    return new Promise((resolve) => {
        if (screenFull.enabled) {
          screenFull.on('change', () => {
            if (!screenFull.isFullscreen) {
              context.commit(SETSCREEN, false);
            }
          });
        }
        resolve();
      });
  },
  toggleScreen(context: { commit: Commit }) {
    if (screenFull.isFullscreen) {
      screenFull.exit();
      context.commit(SETSCREEN, false);
    } else {
      screenFull.request();
      context.commit(SETSCREEN, true);
    }
  },
};

const mutations: MutationTree<IScreenFull> = {
  [SETSCREEN](state: IScreenFull, payload: boolean): void {
    state.active = payload;
  },
};

const getters = {
  active(state: IScreenFull): boolean {
    return state.active;
  },
};

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters,
};
