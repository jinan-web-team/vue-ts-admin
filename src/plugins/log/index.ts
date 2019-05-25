import log from '@/libs/log';
import {VueConstructor} from 'vue';
import store from '@/store';

export default {
  install(Vue: VueConstructor, options: object = {}) {
    Vue.prototype.$log = log;
    Vue.prototype.$addLog = (info: string, show: boolean = true) => {
      store.dispatch('admin/log/add', {
        type: 'log',
        info,
      });
      if (show && process.env.NODE_ENV === 'development') {
        log.default(info);
      }
    };
  },
};
