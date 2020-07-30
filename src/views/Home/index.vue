<template>
  <div class="Home">
    <AtomBar />
    <main class="Home__main-panel"></main>
  </div>
</template>

<script>
import AtomBar from './AtomBar/index.vue';

export default {
  components: {
    AtomBar,
  },
};
</script>

<style lang="scss">
.Home {
  width: 100%;
  display: flex;

  &__main-panel {
    flex-grow: 1;
  }
}
</style>
