import { Commit, MutationTree, Module } from 'vuex';
import { UAParser } from 'ua-parser-js';

interface IUa {
  data: IUAParser.IResult | null;
}

const state: IUa = {
  data: null,
};
const mutations: MutationTree<IUa> = {
  get(state: IUa) {
    const uaParser: UAParser = new UAParser();
    state.data = uaParser.getResult();
  },
};

export default {
  namespaced: true,
  mutations,
  state,
};
