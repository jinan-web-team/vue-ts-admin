import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { getCurrentRoute } from '@/libs/utils';
import BScroll from 'better-scroll';
import { Route } from 'vue-router';
import { IRouteItem } from '@/interface/routes';
import menuList from '@/router/config/menu/aside';

@Component({
  name: 'Aside',
})
class LayoutAside extends Vue {
  @Prop({ default: menuList }) private menuList!: IRouteItem[];
  @Prop({ default: false }) private collapsed!: boolean;
  @Prop({ default: 'dark' }) private theme!: 'light' | 'dark';
  private BS: BScroll | undefined;
  private selectedKeys: string[] = [];
  private openKeys: string[] = [];

  protected render() {
    return (
      <a-menu
        inlineCollapsed={ this.collapsed }
        v-model={this.selectedKeys}
        theme={this.theme}
        mode="inline"
        on-click={this.handleSelect}
        on-openChange={this.openChange}
        openKeys={this.openKeys}
      >
        {this.renderMenu(this.menuList)}
      </a-menu>
    );
  }

  private mounted() {
    this.initScroll();
  }

  private beforeDestroy() {
    this.scrollDestory();
  }

  private renderMenu(menuList: IRouteItem[]) {
    return menuList.map((item: IRouteItem) => {
      if (item.children) {
        return (
          <a-sub-menu key={item.path}>
            <span slot="title">
              {item.meta && item.meta.icon && <a-icon type={item.meta.icon} />}
              <span>{item.meta && item.meta.title}</span>
            </span>
            {this.renderMenu(item.children)}
          </a-sub-menu>
        );
      }
      return (
        <a-menu-item key={item.path}>
          {item.meta && item.meta.icon && <a-icon type={item.meta.icon} />}
         <span> {item.meta && item.meta.title}</span>
        </a-menu-item>
      );
    });
  }

  @Watch('$route', { immediate: true, deep: true })
  private routerUpdate(to: Route) {
    this.selectedKeys = getCurrentRoute(to.path).pathList;
    const openKeys = [...this.selectedKeys];
    openKeys.pop();
    this.openKeys = openKeys || [];
  }

  private initScroll() {
    this.BS = new BScroll(this.$el, {
      mouseWheel: {
        speed: 20,
        invert: false,
        easeTime: 300,
      },
      click: true,
      scrollbar: {
        fade: true,
        // @ts-ignore @types/better-scroll interactive No support added
        interactive: false,
      },
    });
  }

  private scrollDestory() {
    try {
      (this.BS as BScroll).destroy();
    } catch (e) {
      delete this.BS;
      this.BS = undefined;
    }
  }

  private openChange(openKeys: string[]) {
    this.openKeys = openKeys;
  }

  private handleSelect(data: { item: Vue; key: string; keyPath: string[] }) {
    const keyPath = data.keyPath.reverse();
    const path = keyPath.join('/');
    this.$router.push({ path });
  }
}
export default LayoutAside;
