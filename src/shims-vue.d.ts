import Vue from 'vue';

declare module '*.vue' {
  import Vue from 'vue';
}

declare module 'vue/types/vue' {
  interface Vue {
    Form: HTMLFormElement;
  }
}
