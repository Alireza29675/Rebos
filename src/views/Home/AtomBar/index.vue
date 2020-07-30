<template>
  <aside class="AtomBar">
    <ol class="AtomBar__list">
      <li class="AtomBar__item" v-for="(atom, index) of atoms" :key="index">
        <AtomTab v-bind="atom" />
      </li>
    </ol>
  </aside>
</template>

<script>
import AtomTab from './AtomTab.vue';

export default {
  components: {
    AtomTab,
  },
  data() {
    return {
      atoms: [
        {
          title: 'Atom 1',
          active: true,
        },
        {
          title: 'Atom 2',
          active: false,
        },
        {
          title: 'Atom 3',
          active: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.AtomBar {
  height: 100%;
  min-width: 60px;
  padding-top: $global-padding * 0.2;
  background: linear-gradient($grey-2, $grey-1);
}
</style>
