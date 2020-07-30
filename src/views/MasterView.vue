<template>
  <div class="app">
    <HeaderView />
    <div class="app__body">
      <router-view />
    </div>
    <FooterView />
  </div>
</template>

<script>
import HeaderView from './HeaderView/index.vue';
import FooterView from './FooterView/index.vue';

export default {
  components: {
    HeaderView,
    FooterView,
  },
};
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background: $bg-color;
}
.app__body {
  flex-grow: 1;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
}
</style>
