<template>
  <div class="AtomEditor">
    <EditorOperations />
    <MonacoEditor
      class="AtomEditor__editor"
      theme="vs-dark"
      v-model="code"
      :options="options"
      language="javascript" />
  </div>
</template>

<script>
import MonacoEditor from 'vue-monaco';
import EditorOperations from './EditorOperations.vue';

export default {
  components: {
    EditorOperations,
    MonacoEditor,
  },
  data() {
    return {
      code: '',
    };
  },
  computed: {
    options() {
      return {
        fontSize: 16,
      };
    },
  },
};
</script>

<style lang="scss">
.AtomEditor {
  height: 100%;
  overflow: hidden;
  position: relative;

  &__editor {
    width: 100%;
    height: 100%;
  }
}
</style>
