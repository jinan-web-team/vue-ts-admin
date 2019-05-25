<template>
  <div class="home">
    Welcome to Your Vue.js + TypeScript App
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
