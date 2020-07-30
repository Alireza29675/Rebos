<template>
  <ul class="menu">
    <li class="menu__item" v-for="(item, index) of items" :key="index">{{ item.title }}</li>
  </ul>
</template>

<script>
export default {
  computed: {
    items() {
      return [
        { title: 'File' },
        { title: 'Edit' },
        { title: 'Atoms' },
        { title: 'View' },
        { title: 'Help' },
      ];
    },
  },
};
</script>

<style lang="scss">
.menu {
  display: flex;
  height: 100%;
  align-items: stretch;
  justify-content: center;
  font-size: 0.8rem;
  padding: 0 $global-padding;

  &__item {
    display: flex;
    align-items: center;
    padding: 0 $global-padding * 0.6;
    cursor: pointer;

    &:hover {
      background: $grey-5;
    }
  }
}
</style>
