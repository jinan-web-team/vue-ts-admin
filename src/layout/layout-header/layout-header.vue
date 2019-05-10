<template>
  <a-layout-header class="web-header" flex>
    <layout-logo flex-box="0" class="web-logo"></layout-logo>
    <section flex-box="1" flex>
      <a-button flex-box="0" type="primary" @click="toggleCollapsed" class="web-mb web-mt">
        <a-icon :type="isCollapsed" />
      </a-button>
      <div flex-box="1"></div>
      <div flex-box="1" flex>
        <header-screen flex-box="0" />
        <header-user
          flex-box="0"
          :trigger="['click']"
          @on-ok="handleOk"
          @on-cancel="handleCancel"
        ></header-user>
      </div>
    </section>
  </a-layout-header>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import LayoutLogo from '../layout-logo';
import HeaderUser from '../header-user';
import HeaderScreen from '../header-screen';

@Component({
  name: 'LayoutHeader',
  components: {
    LayoutLogo,
    HeaderUser,
    HeaderScreen,
  },
})
class LayoutHeader extends Vue {
  get isCollapsed() {
    return this.collapsed ? 'menu-unfold' : 'menu-fold';
  }
  public current: string[] = ['mail'];
  @Prop({ default: false }) private readonly collapsed!: boolean;

  @Emit('toggleCollapse')
  private toggleCollapsed() {
    return !this.collapsed;
  }
  private handleCancel() {
    // hanleCancel
  }
  private handleOk() {
    // handleOk
  }
}
export default LayoutHeader;
</script>

<style lang="less" scoped>
.web-logo {
  width: 220px;
}
</style>
