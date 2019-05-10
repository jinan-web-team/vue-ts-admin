import { Vue, Component } from 'vue-property-decorator';
import LayoutAside from './layout-aside';
import LayoutHeader from './layout-header';
import LayoutFooter from './layout-footer';
import LayoutTabs from './layout-tabs';
import config from '@/config';
import menuList from '@/router/config/menu/aside';
import '@/assets/styles/layout.less';
import { IRouteItem } from '@/interface/routes';

@Component({
  name: 'Layout',
  components: {
    LayoutHeader,
    LayoutAside,
    LayoutFooter,
    LayoutTabs,
  },
})
class Dashboard extends Vue {
  public BS = null;
  public menuRoutes: IRouteItem[] = menuList;
  public collapsed: boolean = false;
  protected render() {
    return (
      <a-layout class="web-layout">
        <layout-header
          collapsed={ this.collapsed }
          onToggleCollapse = { this.toggleCollapse }
        />
        <a-layout>
          <a-layout-sider
            trigger={ null }
            collapsible
            collapsed={ this.collapsed }
            width="220"
            theme="dark"
            class="web-sider">
            <layout-aside
              collapsed={ this.collapsed }
              menuList={this.menuRoutes}
            />
          </a-layout-sider>
          <a-layout-content>
            <layout-tabs />
            <keep-alive>
              <router-view />
            </keep-alive>
          </a-layout-content>
        </a-layout>
        <layout-footer message={config.footerMessage} />
      </a-layout>
    );
  }
  protected toggleCollapse(val: boolean) {
    console.log(val);
    this.collapsed = val;
  }
}

export default Dashboard;
