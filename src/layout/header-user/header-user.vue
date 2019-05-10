<template>
  <a-dropdown v-bind="$attrs">
    <div class="ant-dropdown-link">
      你好，管理员
    </div>
    <a-menu slot="overlay" @click="handleDropDownMenu">
      <a-menu-item v-for="item in menuData" :key="item.path">
        <a-icon :type="item.icon" /> {{item.name}}
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'HeaderUser',
})
export default class HeaderUser extends Vue {
  private menuData: Array<{ path: string, name: string; icon: string }> = [
    { path: '/login', name: '注销', icon: 'logout' },
    { path: '/editPass', name: '修改密码', icon: 'edit' },
  ];

  private handleDropDownMenu(data: { item: Vue, key: string, keyPath: string[] }) {
    switch (data.key) {
      case '/login':
        this.showPropsConfirm();
        break;
      case '/editPass':
        break;
      default:
        break;
    }
  }

  private showPropsConfirm() {
    this.$confirm({
      title: '确认操作',
      content: '注销当前账户吗? 打开的标签页和用户设置将会被保存。',
      onOk: () => {
        this.$message.info('确定');
        this.$emit('on-ok');
      },
      onCancel: () => {
        this.$message.info('取消');
        this.$emit('on-cancel');
      },
    });
  }
}
</script>
<style lang="less" scoped>
  .ant-dropdown-link {
    color: rgba(255, 255, 255, 0.8);
  }
</style>
