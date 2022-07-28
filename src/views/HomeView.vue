<template>
  <div class="main">
    <div class="greeting">
     <h1>Aqui va el nav y saludo</h1>
    </div>
    <div class="language">
      <h1>Cambio de lenguaje</h1>
    </div>
    <section class="about">
      <h1>About me</h1>
    </section>
    <section class="project">
      <h1>Projects</h1>
    </section>
    <section class="studies">
      <h1>Studies Prosper</h1>
    </section>
    <section class="testimonial">
      <h1>Testimonios</h1>
    </section>
    <footer>
      <h2>contacto</h2>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
});
</script>

<style lang="scss" src="@/assets/c_object/_class.scss" ></style>
