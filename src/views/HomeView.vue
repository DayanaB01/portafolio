<template>
  <div class="main">
    <div class="greeting">
      <img src="../assets/z_images/fondoFirst.png" alt="fondoImg" class="imgfondo" />
      <h1>{{ t('messages.welcome') }}</h1>
      <span>{{ t('messages.description') }}</span>
      <div class="img_mini">
        <img src="@/assets/z_images/photo_perfil.png" alt="photo-perfil" class="mini" />
      </div>
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
<!--COMIENZO DE SECCION-->
    <section class="studies">
      <div class="firstImg">
        <h1>INTERFACES</h1>
        <p>{{ t('messages.descripcionInter') }}</p>
        <ul>
          <li class="tool">FIGMA
            <img src="../assets/z_images/figma.png" alt="logo-figma">
          </li>
        </ul>
        <!-- -->
      </div>
      <div class="textA">
        <h1>{{ t('messages.tituloC') }}</h1>
        <p>{{ t('messages.descripcionH') }}</p>
        <ul>
          <li class="tool">
            html
            <img src="../assets/z_images/html-logo.png" alt="logo-html" />
          </li>
          <li class="tool">JavaScript
            <img src="../assets/z_images/JavaScript-Logo.png" alt="logo-javascript" /></li>
          <li class="tool">Vue
            <img src="../assets/z_images/vue-logo.png" alt="vvue-logo" /></li>
          <li class="tool">Angular
            <img src="../assets/z_images/angular-logo.png" alt="angular-logo" /></li>
        </ul>
        <p>{{ t('messages.descripcionH1') }}</p>
        <ul>
          <li class="tool">css
            <img src="../assets/z_images/css-logo.png" alt="csslogo" /></li>
          <li class="tool">Boostsrap
            <img src="../assets/z_images/bootstrap.png" alt="logo-bootstrap">
          </li>
          <li class="tool">Sass
            <img src="../assets/z_images/sass.png" alt="logo-sass">
          </li>
        </ul>
      </div>
      <div class="secondImg">
        <h1>BACKEND</h1>
        <p>{{ t('messages.descripcionH2') }}</p>
        <ul>
          <li class="tool">.net
            <img src="../assets/z_images/website.png" alt="logo-net">
          </li>
          <li class="tool">php
            <img src="../assets/z_images/php.png" alt="logo-php">
          </li>
          <li class="tool">C++
            <img src="../assets/z_images/c-.png" alt="logo.png">
          </li>
          <li class="tool">SQL
            <img src="../assets/z_images/sql-logo.png" alt="sql-logo" /></li>
        </ul>
        <!--  -->
      </div>
    </section>
    <!--FIN DE SECCION-->
    <section class="project">
      <div class="tittle">
        <h1>{{ t('messages.tituloB') }}</h1>
        <p>{{ t('messages.descripcionLink') }}
          <a href="https://github.com/DayanaB01?tab=repositories">{{ t('messages.linkProyectos') }}</a></p>
      </div>
      <div class="cards">
        <div class="card-container">
          <div class="card1">
            <figure class="card-figure">
          <img src="@/assets/z_images/forms.png" alt="photo-form" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Lavanderia</h2>
          <p class="card-text">Manejo codigo php, y base de datos sql</p>
          <a href="#" class="card-link">Ver</a>
        </div>
          </div>
        </div>
        <!-- <div class="card">
          <a href="https://github.com/DayanaB01/Lava_Autos/tree/main">
            <img src="@/assets/z_images/forms.png" alt="photo-form" />
          </a>
          <h1>Lavanderia</h1>
          <span>HTML-Javascript-php-Sql</span>
        </div> -->
        <div class="card">
          <a href="https://github.com/DayanaB01/RecetasOn">
            <img src="@/assets/z_images/principal.png" alt="preview-forms" />
          </a>
          <h1>Recetas On</h1>
          <span>Angular-firebase-typescript</span>
        </div>
        <div class="card">
          <a href="https://dayanab01.github.io/MiniMarket/index.html">
            <img src="@/assets/z_images/mini-market.png" alt="preview-mini-market" />
          </a>
          <h1>Store eccomerce</h1>
          <span>HTML-Bootstrap(Responsive)-css</span>
        </div>
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
