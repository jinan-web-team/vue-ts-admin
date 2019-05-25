<template>
  <div class="home">
    Welcome to Your Vue.js + TypeScript App
    <a-button type="primary">Primary</a-button>
    <a-button>Default</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="danger">Danger</a-button>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    name: 'Home',
    components: {},
  })
  export default class Home extends Vue {
  }
</script>
