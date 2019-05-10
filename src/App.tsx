import { Component, Vue } from 'vue-property-decorator';
import { LocaleProvider } from 'ant-design-vue';
// @ts-ignore
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
import '@/assets/styles/public-class.less';


@Component({
  name: 'App',
  components: {
    'locale-provider': LocaleProvider,
  },
})
class App extends Vue {
  protected render() {
    return (
      <div id="app">
        <locale-provider locale={ zh_CN }>
          <router-view />
        </locale-provider>
      </div>
    );
  }
}

export default App;
