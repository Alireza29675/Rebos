<template>
  <div id="app">
    <HeaderView />
    <div class="app__body">
      <router-view />
    </div>
    <FooterView />
  </div>
</template>

<script>
import HeaderView from '@/components/HeaderView/index.vue';
import FooterView from '@/components/FooterView/index.vue';

export default {
  components: {
    HeaderView,
    FooterView,
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background: $bg-color;
}
.app__body {
  flex-grow: 1;
}
</style>
