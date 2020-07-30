<template>
  <div id="app">
    <HeaderView />
    <router-view />
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

</style>
