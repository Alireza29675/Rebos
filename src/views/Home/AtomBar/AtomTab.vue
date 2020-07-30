<template>
  <div class="AtomTab AtomTab__active">
    <div class="AtomTab__icon">
      {{ title | abbr }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  filters: {
    abbr(value) {
      return value.split(' ').map((part) => part[0].toUpperCase()).join('');
    },
  },
};
</script>

<style lang="scss">
.AtomTab {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;

  &--active::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: $primary-color;
    position: absolute;
  }

  &__icon {
    @include center;
    @include rounded;
    position: absolute;
    width: 75%;
    height: 75%;
    background: $grey-5;
    font-size: 1em;
    display: grid;
    place-items: center;
  }
}
</style>
