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
          <a href="https://dayanab01.github.io/Lava_Autos/index.html">
          <img src="@/assets/z_images/forms.png" alt="preview-forms">
          <h1>FORMS STORE</h1></a>
        </div>
        <div class="card">
          <a href="https://dayanab01.github.io/MiniMarket/index.html">
          <img src="@/assets/z_images/mini-market.png" alt="preview-mini-market">
          <h1>STORE ECOMMERCE</h1></a>
        </div>
        <div class="card">
          <img src="@/assets/z_images/logo.png" alt="proyecto3">
          <h1>PROJECT THREE</h1>
        </div>
      </div>
    </section>
    <section class="studies">
      <div class="text">
        <h1>Studies Prosper</h1>
        <p>
          I make part of prospercty where I learned more topics of the development web,
          all that I learned theoretically I put it into practice, I learned on html, css,
          javascript and I met a framwork, Vue, now I am studying it a lot of envelope as
          to manage it and to familiarize more with the one. In non alone prospercity I
          learned on development, I also learned more envelope the work in team, develop
          more my communication abilities, and about the value of sharing.
        </p>
      </div>
    </section>
    <section class="testimonial">
      <div class="text">
        <h1>Practices</h1>
        <p>
          I have abilities in different programming languages, something of python, c++ and java,
          I have basic knowledge of backend, although my strong and favorite is development
          front-end, my projects are emphasized in the html part, css and Javascript, handling
          some framworks like Vue, boostsrap, jquery, css pre-compiler like scss and some
          projects have carried out them with content agents as joomla and wordpress. I want
          to continue learning and to strengthen my learning abilities and at the same time
          to help in a development team in a managerial project  and to share the abilities that
          I have acquired until today.
        </p>
      </div>
    </section>
    <footer>
      <h2>contact</h2>
      <div>
        <p>If you want contact me...</p>
        <ul>
          <a href="https://github.com/DayanaB01">GitHub</a>
        </ul>
        <ul>
          dahianab01@gmail.com
        </ul>
        <ul>
          Linkendin
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
