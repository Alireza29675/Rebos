<template>
  <MonacoEditor
    class="Home__editor"
    theme="vs-dark"
    v-model="code"
    language="javascript" />
</template>

<script>
import MonacoEditor from 'vue-monaco';

export default {
  components: {
    MonacoEditor,
  },
};
</script>

<style>

</style>
