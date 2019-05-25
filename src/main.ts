import Vue from 'vue';
import router from './router';
import store from './store';
import webAdmin from '@/plugins/admin';
import App from '@/App';

Vue.use(webAdmin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  async mounted() {
    this.$store.commit('releases/getVersion');
    this.$store.commit('ua/get');
    this.$store.dispatch('fullscreen/listen');
  },
}).$mount('#app');
