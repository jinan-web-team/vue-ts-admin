<template>
  <div>
    <a-tabs defaultActiveKey="1"  @prevClick="callback" @nextClick="callback">
      <a-tab-pane tab="Tab 1" key="1"></a-tab-pane>
      <a-tab-pane tab="Tab 2" key="2"></a-tab-pane>
      <a-tab-pane tab="Tab 3" key="3"></a-tab-pane>
      <a-tab-pane tab="Tab 4" key="4"></a-tab-pane>
      <a-tab-pane tab="Tab 5" key="5"></a-tab-pane>
      <a-tab-pane tab="Tab 6" key="6"></a-tab-pane>
      <a-tab-pane tab="Tab 7" key="7"></a-tab-pane>
      <a-tab-pane tab="Tab 8" key="8"></a-tab-pane>
      <a-tab-pane tab="Tab 9" key="9"></a-tab-pane>
      <a-tab-pane tab="Tab 10" key="10"></a-tab-pane>
      <a-tab-pane tab="Tab 11" key="11"></a-tab-pane>
      <a-tab-pane tab="Tab 12" key="12"></a-tab-pane>
      <a-tab-pane tab="Tab 12" key="13"></a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'LayoutTabs',
})
export default class LayoutTabs extends Vue {
  public callback(val: any) {
    console.log(val);
  }
}
</script>
