import Layout from '@/layout';
import Vue, { ComponentOptions, AsyncComponent } from 'vue';
type Component = ComponentOptions<Vue> | typeof Vue | AsyncComponent;

interface IDynamicComponents {
  [key: string]: Component;
}

const DynamicComponents: IDynamicComponents = {
  Layout,
  menu: () => import(/* webpackChunkName: 'menu' */'@/views/menu/menu.vue'),
  role: () => import(/* webpackChunkName: 'role' */'@/views/role/role.vue'),
};

export default DynamicComponents;
