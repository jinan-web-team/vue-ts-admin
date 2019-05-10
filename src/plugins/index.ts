import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '@/assets/styles/antd-variables.less';
// flex 布局库
import 'flex.css';

interface IPlugins {
  use: (arg0: typeof Antd) => void;
  prototype: {
    $baseUrl: string;
    $env: string;
    $version: string;
  };
}
export default {
    install(Vue: IPlugins, options?: object) {
        Vue.use(Antd);
        Vue.prototype.$baseUrl = process.env.BASE_URL;
        Vue.prototype.$env = process.env.NODE_ENV;
        Vue.prototype.$version = process.env.VUE_APP_VERSION;
    },
};
