<template>
  <i :class="['bx', 'bx-xs', `bx-${className}`]"></i>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    className() {
      return this.name.toLowerCase();
    },
  },
};
</script>

<style>

</style>
