<template>
  <component-nav/>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ComponentNav from '@/components/a-atom/ComponentNav.vue';

export default defineComponent({
  name: 'App',
  components: {
    ComponentNav,
  },
});
</script>

<style lang="scss">
#app {
  text-align: center;
}
</style>
