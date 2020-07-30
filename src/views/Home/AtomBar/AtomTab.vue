<template>
  <div class="AtomTab" :class="{ 'AtomTab--active': active }">
    <div class="AtomTab__icon">
      {{ title | abbr }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    active: Boolean,
  },
};
</script>

<style lang="scss">
.AtomTab {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;
  @include clickable;

  &--active{
    @include unclickable;

    &::after {
      content: '';
      width: 10px;
      height: 50%;
      border-radius: 5px;
      background: $primary-gradient;
      position: absolute;
      @include center-y;
      left: -7px;
    }
  }

  &__icon {
    @include center;
    @include rounded;
    position: absolute;
    width: 70%;
    height: 70%;
    background: $grey-5;
    font-size: 1em;
    display: grid;
    place-items: center;
  }
}
</style>
