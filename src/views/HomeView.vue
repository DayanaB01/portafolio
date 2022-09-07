<template>
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
      <div class="about-img">
           <img src="@/assets/z_images/photo.png" alt="foto" />
      </div>
      <div class="about-me">
        <h1>About me</h1><br>
        <p>
         Hi! I am Dayana Betancur, developer front-end and technologist in
         systems, lover of the technology but also of the music and the art. I work
         every day to improve my abilities for manager JavaScript, HTML, CSS, boostsrap,
         python, Vue.js, JQuery, php, Postgrees and my proffessional aptitudes. I practice what
         I have learned in personal projects, I like to read, to study, to help and to
         know more of the development web and as through this.
         If you want to know more than my projects, I invite you to see my repositories
        <a href="https://github.com/DayanaB01?tab=repositories">here.</a>
        </p>
      </div>
    </section>
    <section class="project">
      <div class="tittle"> <h1>Projects</h1> </div>
      <div class="cards">
        <div class="card">
          <a href="https://dayanab01.github.io/Lava_Autos/index.html">
          <img src="@/assets/z_images/forms.png" alt="preview-forms">
          <h1>Forms Car</h1></a>
        </div>
        <div class="card">
          <a href="https://dayanab01.github.io/MiniMarket/index.html">
          <img src="@/assets/z_images/mini-market.png" alt="preview-mini-market">
          <h1>Store eccomerce</h1></a>
        </div>
        <div class="card">
          <a href="https://dayanab01.github.io/Curriculum/formulario.html">
          <img src="@/assets/z_images/form.png" alt="photo-form">
          <h1>Curriculum form</h1></a>
        </div>
      </div>
    </section>
    <section class="studies">
      <div class="text">
        <h1>Studies Prosper</h1><br>
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
        <h1>Practices</h1><br>
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
      <div><br>
        <ul>
          <a href="https://github.com/DayanaB01">GitHub</a>
        </ul><br>
        <ul>
          <a href="www.linkedin.com/in/dayana-betancur-gañán">Linkendin</a>
        </ul><br>
        <p>Made in Colombia by Dayana Betancur</p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
});
</script>

<style lang="scss" src="@/assets/general.scss"></style>
