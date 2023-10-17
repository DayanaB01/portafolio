<template>
  <div class="main">
    <div class="greeting">
      <img src="../assets/z_images/fondoFirst.png" alt="fondoImg" class="imgfondo">
      <h1>Hi!👋 Welcome to my portafolio</h1>
      <img src="@/assets/z_images/photo-perfil.png" alt="photo-perfil" class="mini">
    </div>
    <section class="about">
      <div class="about-img">
           <img src="../assets/z_images/perfil.png" alt="foto" />
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
          <img src="@/assets/z_images/forms.png" alt="preview-forms">
          <a href="https://dayanab01.github.io/Lava_Autos/index.html"><h1>Forms Car</h1></a>
        </div>
        <div class="card">
          <img src="@/assets/z_images/mini-market.png" alt="preview-mini-market">
          <a href="https://dayanab01.github.io/MiniMarket/index.html"><h1>Store eccomerce</h1></a>
        </div>
        <div class="card">
          <img src="@/assets/z_images/form.png" alt="photo-form">
          <a href="https://dayanab01.github.io/Curriculum/formulario.html"><h1>Curriculum form</h1></a>
        </div>
      </div>
    </section>
    <section class="studies">
      <div class="text">
        <h1>Abilities</h1><br>
        <p>
          In my personal projects I have used some programming languages,
          as much in front-end as in the backend, however, my strong one and
          my more developed abilities are in the part front, some of the
          projects are built in front end:
        </p>
        <ul>
          <li>html</li>
          <li>css</li>
          <li>JavaScript</li>
          <li>C++</li>
        </ul>
        <p>
          And I have used frameworks like: Vue.js, JQuery, Bootstrap.
          In the part back of some of my projects have used:
        </p>
          <ul>
            <li>php</li>
            <li>SQL</li>
            <li>Java</li>
          </ul>
        <p>
          However, I am willing to fasten other languages, framworks,
          and development tools to go being formed little by little in a full stack.
        </p>
      </div>
    </section>
    <section class="practices">
      <div class="text">
        <h1>Studies</h1><br>
        <p>
       The studies that I have carried out have been a great support in my academic
       formation, but they have also been formed in my personal formation, although
       every day my self taught formation is the one that reinforces my knowledge.
       I have studies carried out in:
        </p>
        <ul>
          <li>Technique in Systems (SENA)</li>
          <li>Technologist in systems University of Caldas (Universidad de Caldas)</li>
          <li>It programs I develop front-end (Prospercity)</li>
          <li> Courses of languages and frameworks (PLATZI)</li>
        </ul>
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
        <p>Made in Colombia width 🤍 <br> by Dayana Betancur</p>
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
