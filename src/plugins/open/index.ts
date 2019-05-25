import { VueConstructor } from 'vue';
import openPage from '@/libs/open';

export default {
  install(Vue: VueConstructor, options: object = {}) {
    Vue.prototype.$open = openPage;
  },
};
