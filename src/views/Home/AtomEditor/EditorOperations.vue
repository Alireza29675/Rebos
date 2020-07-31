<template>
  <div class="EditorOperations">
    <ul class="EditorOperations__list">
      <li class="EditorOperations__item" v-for="(operation, index) of operations" :key="index">
        <Icon name="right-arrow"></Icon>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from '../../shared/Icon.vue';

export default {
  components: {
    Icon,
  },
  computed: {
    operations() {
      return [
        { title: 'run' },
        { title: 'debug' },
      ];
    },
  },
};
</script>

<style lang="scss">
.EditorOperations {
  position: absolute;
  top: 0;
  right: 10%;
  background: $grey-4;
  z-index: 99;

  &__list {
    display: flex;
  }

  &__item {
    width: 30px;
    height: 30px;

    &:hover {
      background: $grey-5;
    }
  }
}
</style>
