<template>
    <nav>
      <div class="routers">
        <router-link to="/">Home</router-link>
        <router-link to="/ComponentForm">Contact</router-link>
      </div>
      <div class="botones">
        <button v-on:click="switchLocale()">{{ displayLocale }}</button>
      </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import i18n from '@/i18n';

export default defineComponent({
  name: 'ComponentNav',
  methods: {
    switchLocale() {
      if (this.$i18n.locale === 'es') {
        this.$i18n.locale = 'en';
      } else {
        this.$i18n.locale = 'es';
      }
    },
  },
  computed: {
    displayLocale() {
      let other = 'EN';
      if (this.$i18n.locale === 'en') {
        other = 'ES';
      }
      return other;
    },
  },
});
</script>
