<template>
  <div class="AtomTab">
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="scss">
.AtomTab {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background: blue;
  margin-bottom: $global-margin * 0.5;
  position: relative;
}
</style>
