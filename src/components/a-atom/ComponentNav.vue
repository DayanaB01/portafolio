<template>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/ComponentForm">Contact</router-link>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComponentNav',
});
</script>
