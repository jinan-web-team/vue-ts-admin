// @ts-ignore
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
import { Vue, Component } from 'vue-property-decorator';
import '@/assets/styles/public-class.less';

@Component({
  name: 'App',
})

class App extends Vue {
  private readonly zhCN = zh_CN;

  protected render() {
    return (
      <a-locale-provider locale={ this.zhCN }>
        <div id="app">
          <router-view/>
        </div>
      </a-locale-provider>
    );
  }
}

export default App;
