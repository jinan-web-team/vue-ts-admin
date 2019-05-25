import Vue from 'vue';
import router from './router';
import store from './store';
import webAdmin from '@/plugins/admin';
import App from '@/App';

Vue.use(webAdmin);

new Vue({
  router,
  store,
  render: (h) => h(App),
  async mounted() {
    this.$store.commit('releases/getVersion');
    this.$store.commit('ua/get');
    this.$store.dispatch('fullScreen/watchScreen');
  },
}).$mount('#app');
