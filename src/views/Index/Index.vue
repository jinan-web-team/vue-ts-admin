<template>
  <div>
    index
    <a-button type="primary">Primary</a-button>
    <a-button>Default</a-button>
    <a-button size="large" type="dashed">Dashed</a-button>
    <a-button type="danger">Danger</a-button>
  </div>
</template>


<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component({
    name: 'Index',
  })
  export default class Index extends Vue {

  }
</script>
