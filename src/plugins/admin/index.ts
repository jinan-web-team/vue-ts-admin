import { VueConstructor } from 'vue';

// ant-vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '../../assets/styles/antd/antd-variables.less';

// components
import '@/components';

// flex 布局库
import 'flex.css';

// 插件
import pluginLog from '@/plugins/log';
import pluginError from '@/plugins/error';
import pluginOpen from '@/plugins/open';

// 过滤器
import * as filters from '@/filter';

export default {
  install(Vue: VueConstructor, options: object = {}) {

    Vue.config.productionTip = false;
    Vue.prototype.$baseUrl = process.env.BASE_URL;
    Vue.prototype.$env = process.env.NODE_ENV;
    Vue.prototype.$version = process.env.VUE_APP_VERSION;
    Vue.prototype.$build_time = process.env.VUE_APP_BUILD_TIME;
    // ant-vue
    Vue.use(Antd);
    // 插件
    Vue.use(pluginLog);
    Vue.use(pluginError);
    Vue.use(pluginOpen);
    // 注册过滤器
    Object.keys(filters).forEach((key: string) => {
      Vue.filter(key, filters[ key ]);
    });
  },
};
