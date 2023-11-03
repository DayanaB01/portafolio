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
        <h1>{{ t('messages.tituloA') }}</h1>
        <p>{{ t('messages.perfil') }}</p>
      </div>
    </section>
    <section class="project">
      <div class="tittle">
        <h1>{{ t('messages.tituloB') }}</h1>
        <p>{{ t('messages.descripcionLink') }}
          <a href="https://github.com/DayanaB01?tab=repositories">{{ t('messages.linkProyectos') }}</a></p>
      </div>
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
        <h1>{{ t('messages.tituloC') }}</h1>
        <p>{{ t('messages.descripcionH') }}</p>
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
        <p>{{ t('messages.descripcionH1') }}</p>
        <ul>
          <li class="tool">css <span class="tooltip">Cascading Style Sheets</span></li>
          <li class="tool">Boostsrap <span class="tooltip">Is an open-source CSS framework</span>
          </li>
          <li class="tool">Sass <span class="tooltip">Syntactically Awesome Stylesheets</span></li>
        </ul>
        <p>{{ t('messages.descripcionH2') }}</p>
        <ul>
          <li class="tool">php <span class="tooltip"> Hypertext Preprocessor</span></li>
          <li class="tool">SQL <span class="tooltip"> Structured Query Language</span></li>
          <li class="tool">Java <span class="tooltip"> lenguaje de programación y
            una plataforma informática</span></li>
          <li class="tool">C++ <span class="tooltip">Programming Language</span></li>
        </ul>
        <p>{{ t('messages.descripcionH3') }}</p>
      </div>
      <div class="secondImg">
        <img src="../assets/z_images/css-logo.png" alt="csslogo" />
        <img src="../assets/z_images/angular-logo.png" alt="angular-logo" />
        <img src="../assets/z_images/sql-logo.png" alt="sql-logo" />
      </div>
    </section>
    <section class="practices">
      <div class="text">
        <h1>{{ t('messages.tituloD') }}</h1>
        <div class="certificated">
          <p>{{ t('messages.descripcionS') }}</p>
        <ul>
          <li>{{ t('messages.certificado1') }}</li>
          <li>{{ t('messages.certificado2') }}</li>
          <li>{{ t('messages.certificado3') }}</li>
          <li>{{ t('messages.certificado4') }}</li>
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
          {{ t('messages.footer1') }}🤍
        </span>
        <span>
          {{ t('messages.footer2') }}
        </span>
        <span>{{ t('messages.anio') }}</span>
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
