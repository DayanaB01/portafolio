<template>
  <div class="main">
    <div class="greeting">
      <img src="../assets/z_images/fondoFirst.png" alt="fondoImg" class="imgfondo" />
      <h1>{{ t('messages.welcome') }}</h1>
      <img src="@/assets/z_images/photo-perfil.png" alt="photo-perfil" class="mini" />
    </div>
    <section class="about">
      <div class="about-img">
        <img src="../assets/z_images/perfil.png" alt="foto" />
      </div>
      <div class="about-me">
        <h1>About me</h1>
        <p>message: {{ t('messages.hello', { name: 'Amigo'}) }}</p>
        <p>{{ n(1000, 'currency') }}</p>
        <p>
          Hi! I am Dayana Betancur, developer front-end and technologist in systems, lover of the
          technology but also of the music and the art. I work every day to improve my abilities for
          manager JavaScript, HTML, CSS, boostsrap, python, Vue.js, JQuery, php, Postgrees and my
          proffessional aptitudes. I practice what I have learned in personal projects, I like to
          read, to study, to help and to know more of the development web and as through this. If
          you want to know more than my projects, I invite you to see my repositories
          <a href="https://github.com/DayanaB01?tab=repositories">here.</a>
        </p>
      </div>
    </section>
    <section class="project">
      <div class="tittle"><h1>My projects</h1></div>
      <div class="cards">
        <div class="card">
          <a href="https://dayanab01.github.io/Lava_Autos/index.html">
            <img src="@/assets/z_images/forms.png" alt="preview-forms" />
          </a>
          <h1>Forms Car</h1>
        </div>
        <div class="card">
          <a href="https://dayanab01.github.io/MiniMarket/index.html">
            <img src="@/assets/z_images/mini-market.png" alt="preview-mini-market" />
          </a>
          <h1>Store eccomerce</h1>
        </div>
        <div class="card">
          <a href="https://dayanab01.github.io/Curriculum/formulario.html">
            <img src="@/assets/z_images/form.png" alt="photo-form" />
          </a>
          <h1>Curriculum form</h1>
        </div>
      </div>
    </section>
    <section class="studies">
      <div class="firstImg">
        <img src="../assets/z_images/html-logo.png" alt="logo-html" />
        <img src="../assets/z_images/JavaScript-Logo.png" alt="logo-javascript" />
        <img src="../assets/z_images/vue-logo.png" alt="vvue-logo" />
      </div>
      <div class="textA">
        <h1>Abilities</h1>
        <p>
          In my personal projects I have used some programming languages, as much in front-end as in
          the backend, however, my strong one and my more developed abilities are in the part front,
          some of the projects are built in front end:
        </p>
        <ul>
          <li class="tool">
            html
            <span class="tooltip">
              HyperText Markup Language
            </span>
          </li>
          <li class="tool">JavaScript <span class="tooltip">It's a scripting language</span></li>
          <li class="tool">Vue <span class="tooltip">An approachable, performant and versatile
             framework for building web user interfaces.</span></li>
          <li class="tool">Angular <span class="tooltip">Is a platform for building mobile and
            desktop web applications.</span></li>
        </ul>
        <p>And I have used design:</p>
        <ul>
          <li class="tool">css <span class="tooltip">Cascading Style Sheets</span></li>
          <li class="tool">Boostsrap <span class="tooltip">Is an open-source CSS framework</span>
          </li>
          <li class="tool">Sass <span class="tooltip">Syntactically Awesome Stylesheets</span></li>
        </ul>
        <p>In the part back of some of my projects have used:</p>
        <ul>
          <li class="tool">php <span class="tooltip"> Hypertext Preprocessor</span></li>
          <li class="tool">SQL <span class="tooltip"> Structured Query Language</span></li>
          <li class="tool">Java <span class="tooltip"> lenguaje de programación y
            una plataforma informática</span></li>
          <li class="tool">C++ <span class="tooltip">Programming Language</span></li>
        </ul>
        <p>
          However, I am willing to fasten other languages, framworks, and development tools to go
          being formed little by little in a full stack.
        </p>
      </div>
      <div class="secondImg">
        <img src="../assets/z_images/css-logo.png" alt="csslogo" />
        <img src="../assets/z_images/angular-logo.png" alt="angular-logo" />
        <img src="../assets/z_images/sql-logo.png" alt="sql-logo" />
      </div>
    </section>
    <section class="practices">
      <div class="text">
        <h1>Studies</h1>
        <div class="certificated">
          <p>
          The studies that I have carried out have been a great support in my academic formation,
          but they have also been formed in my personal formation, although every day my self taught
          formation is the one that reinforces my knowledge. I have studies carried out in:
        </p>
        <ul>
          <li>Technique in Systems (SENA)</li>
          <li>Technologist in systems University of Caldas (Universidad de Caldas)</li>
          <li>It programs I develop front-end (Prospercity)</li>
          <li>Courses of languages and frameworks (PLATZI)</li>
        </ul>
        </div>
      </div>
    </section>
    <footer>
      <div class="box">
        <ul>
          <a href="https://github.com/DayanaB01">GitHub</a>
        </ul>
        <ul>
          <a href="www.linkedin.com/in/dayana-betancur-gañán">Linkendin</a>
        </ul>
        <span>
          Made in Colombia with 🤍
        </span>
        <span>
          By Dayana Betancur
        </span>
        <span>UPDATING....</span>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import enUS from '../locales/en.json';

type MessageSchema = typeof enUS;

type NumberSchema = {
  currency: {
    style: 'currency',
    currencyDisplay: 'symbol'
    currency: string
  }
};

export default defineComponent({
  name: 'HomeView',
  setup() {
    /**
     * You can specify the your definition schema with object literal at first type parameters
     * About type parameter, see the http://vue-i18n.intlify.dev/api/composition.html#usei18n
     */
    const { t, n } = useI18n<{
      message: MessageSchema,
      number: NumberSchema
    }, 'en-US'>({
      inheritLocale: true,
      messages: {
        'en-US': enUS,
      },
      numberFormats: {
        'en-US': {
          currency: {
            style: 'currency',
            currencyDisplay: 'symbol',
            currency: 'USD',
          },
        },
      },
    });
    return { t, n };
  },
});
</script>

<style lang="scss" src="@/assets/general.scss"></style>
