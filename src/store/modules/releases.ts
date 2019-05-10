import { Commit, MutationTree, Module } from 'vuex';
import log from '@/libs/log';
import { Direction } from '@/interface/enum';
import config from '@/config';

interface IReleases {
  version: string;
}

const state: IReleases = {
  version: config.version,
};
const mutations: MutationTree<IReleases> = {
  getVersion(state: IReleases): void {
    log.capsule('ts-admin', state.version, Direction.success);
    console.log('请不要吝啬您的 star，谢谢 ~');
  },
};

export default {
  namespaced: true,
  mutations,
  state,
};
