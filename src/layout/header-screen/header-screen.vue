<template>
  <div class="web-mr">
    <a-tooltip placement="bottom">
      <template slot="title">
        <span>{{ active ? '退出全屏' : '全屏' }}</span>
      </template>
      <a-icon
        @click="toggleScreen"
        class="web-screen"
        :type="active ? 'fullscreen-exit' : 'fullscreen'"/>
    </a-tooltip>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import { namespace } from 'vuex-class';

  const screen = namespace('fullScreen');

  @Component({
    name: 'HeaderScreen',
  })
  export default class HeaderScreen extends Vue {
    @screen.Getter private active!: boolean;
    @screen.Action private toggleScreen!: () => void;
  }
</script>

<style lang="less" scoped>
  .web-screen {
    border: none;
    font-size: 20px;
    vertical-align: middle;
    color: #ffffff;
    cursor: pointer;

    &:hover {
      color: #1890ff;
    }
  }
</style>
