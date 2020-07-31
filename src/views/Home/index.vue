<template>
  <div class="Home">
    <AtomBar />
    <main class="Home__main-panel">
      <AtomEditor />
    </main>
  </div>
</template>

<script>
import AtomEditor from './AtomEditor.vue';
import AtomBar from './AtomBar/index.vue';

export default {
  components: {
    AtomEditor,
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

  &__editor {
    width: 100%;
    height: 100%;
  }
}
</style>
