<template>
  <div class="HeaderView">
    <Menu />
  </div>
</template>

<script>
import Menu from './Menu.vue';

export default {
  components: {
    Menu,
  },
};
</script>

<style lang="scss">
.HeaderView {
  @include box;
  height: 30px;
}
</style>
