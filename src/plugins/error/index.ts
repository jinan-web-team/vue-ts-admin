import { VueConstructor } from 'vue';
import store from '@/store';
import log from '@/libs/log';
import { Direction } from '@/interface/enum';

export default {
  install(Vue: VueConstructor, options: object = {}) {
    Vue.config.errorHandler = (err: any, vm, info: string) => {
      Vue.nextTick(() => {
        // 添加 log
        store.dispatch('admin/log/add', {
          type: 'error',
          err,
          vm,
          info,
        });
        if (process.env.NODE_ENV === 'development') {
          log.capsule('admin', 'ErrorHandler', Direction.danger);
          log.danger('>>>>>> 错误信息 >>>>>>');
          console.log(info);
          log.danger('>>>>>> Vue 实例 >>>>>>');
          console.log(vm);
          log.danger('>>>>>> Error >>>>>>');
          console.log(err);
        }
      });
    };
  },
};
