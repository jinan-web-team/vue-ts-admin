<template>
  <i :class="iconClass" :style="styles"></i>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'admin-icon',
})
class AdminIcon extends Vue {
  @Prop({ required: true }) public readonly type!: string;
  @Prop({ default: '5c6b77' }) public readonly color!: string;
  @Prop({ default: 16 }) public readonly size!: number;

  get iconClass() {
    return [ 'iconfont', `icon-${ this.type }` ];
  }

  get styles() {
    return {
      fontSize: this.size + 'px',
      color: this.color,
    };
  }
}

export default AdminIcon;
</script>
