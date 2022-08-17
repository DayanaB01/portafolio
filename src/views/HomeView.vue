<template>
  <ComponentVue/>
  <div class="main">
    <div class="greeting">
      <h1>Hi! Welcome to my portafolio</h1>
      <img src="@/assets/z_images/photo-perfil.png" alt="photo-perfil">
    </div>
    <div class="language">
      <h5> |</h5>
      <h1>🔒  🔓</h1>
    </div>
    <section class="about">
        <img src="@/assets/z_images/photo-about.png" alt="foto" />
        <div>
        <h1>About me</h1><br>
        <p>
          I am Dayana Betancur and I am developer front end, I studie system tecnology and work with
          language as JavaScript, Java and python althogh I practice and learn more all I know on
          persola project. Also I belive that developer is perfect combination with music because
          both is my pasion and funny.
          All my projects be in GitHub <a href="">repositories</a>.
        </p>
        </div>
    </section>
    <section class="project">
      <h1>Projects</h1>
      <div class="cards">
        <div class="card">
          <img src="@/assets/z_images/logo.png" alt="proyecto1">
          <p>PROJECT ONE</p>
        </div>
        <div class="card">
          <img src="@/assets/z_images/logo.png" alt="proyecto2">
          <p>PROJECT TWO</p>
        </div>
        <div class="card">
          <img src="@/assets/z_images/logo.png" alt="proyecto3">
          <p>PROJECT THREE</p>
        </div>
      </div>
    </section>
    <section class="studies">
      <div class="text">
        <h1>Studies Prosper</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </section>
    <section class="testimonial">
      <div class="text">
        <h1>Testimonios</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </div>
    </section>
    <footer>
      <h2>contacto</h2>
      <div>
        <ul>
          Lorem ipsum dolor sit amet
        </ul>
        <ul>
          Lorem ipsum dolor sit amet
        </ul>
        <ul>
          Lorem ipsum dolor sit amet
        </ul>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ComponentVue from '@/components/a-atom/ComponentNav.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    ComponentVue,
  },
});
</script>

<style lang="scss" src="@/assets/general.scss"></style>
