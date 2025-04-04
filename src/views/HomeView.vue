<template>
  <div class="main">
    <div class="greeting">
      <img src="../assets/z_images/fondoFirst.png" alt="fondoImg" class="imgfondo" />
      <div class="contenedorT">
        <h1>{{ t('messages.welcome') }}</h1>
      <span>{{ t('messages.description') }}</span>
      <div class="img_mini">
        <img src="@/assets/z_images/photo_perfil.png" alt="photo-perfil" class="mini" />
      </div>
      </div>
    </div>
    <section class="about">
      <div class="about-img">
        <img src="../assets/z_images/perfil.png" alt="foto" />
      </div>
      <div class="about-me">
        <div class="textMe">
          <h1>{{ t('messages.tituloA') }}</h1>
          <p>{{ t('messages.perfil') }}</p>
        </div>
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
            <img src="../assets/z_images/JavaScript-Logo.png" alt="logo-javascript" />
          </li>
          <li class="tool">Angular
            <img src="../assets/z_images/angular-logo.png" alt="angular-logo" />
          </li>
        </ul>
        <p>{{ t('messages.descripcionH1') }}</p>
        <ul>
          <li class="tool">css
            <img src="../assets/z_images/css-logo.png" alt="csslogo" />
          </li>
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
          <li class="tool">C++
            <img src="../assets/z_images/c-.png" alt="logo.png">
          </li>
        </ul>
        <!--  -->
      </div>
    </section>
    <!--FIN DE SECCION-->
    <section class="project">
      <div class="tittle">
        <div class="boxtext">
          <h1>{{ t('messages.tituloB') }}</h1>
        <p>{{ t('messages.descripcionLink') }}
          <a href="https://github.com/DayanaB01?tab=repositories">{{ t('messages.linkProyectos') }}</a>
        </p>
        </div>
      </div>
      <div class="cards">
        <div class="projectOne">
          <h2 class="card-title">Recetas On</h2>
          <figure class="card-figure">
              <img src="@/assets/z_images/principal.png" alt="preview-forms" />
          </figure>
          <div class="card-text">
            <h4>Diseño: </h4>
            {{ t('messages.cardText2') }} <a href="https://www.figma.com/design/2t87LDIrijIxX6no1GsUEK/Untitled?node-id=0-1&t=e0vManvdKFWHzw4J-1">🔗</a>
            <h4>Front end:</h4>
             {{ t('messages.cardText21') }} <a href="https://dayanab01.github.io/RecetasOn/" class="card-link">🔗</a>
             <h4>Back end:</h4>
             {{ t('messages.cardText22') }}
          </div>
        </div>
        <div class="projectOne">
          <h2 class="card-title">Blog musical</h2>
          <figure class="card-figure">
             <img src="@/assets/z_images/blog.png" alt="preview-mini-market" />
          </figure>
          <div class="card-text">
            <h4>Diseño:</h4>
            {{ t('messages.cardText12') }} <a href="https://www.figma.com/design/9fLA4AtjuldR76zsOuoCFm/Untitled?node-id=0-1&t=FfxzhP0Y2xDU5KH3-1">🔗</a>
            <h4>Front end: </h4>
            {{ t('messages.cardText1') }}<a href="https://dayanab01.github.io/musicalWeb/" class="card-link">🔗 </a>
          </div>
        </div>
        <div class="projectOne">
          <h2 class="card-title">Market</h2>
          <figure class="card-figure">
              <img src="@/assets/z_images/mini-market.png" alt="preview-mini-market" />
          </figure>
          <div class="card-text">
            <h4>Front end: </h4>
            {{ t('messages.cardText3') }} <a href="https://dayanab01.github.io/MiniMarket/" class="card-link">🔗 </a>
          </div>
        </div>
      </div>
    </section>
    <section class="experience">
      <div class="textExperience">
        <h1>{{ t('messages.experience') }}</h1>
        <h4>Empresarial</h4>
        <ul>
          <li>PROSPERCITY BOOTCAMP 2021-2022 </li>
          <li>STARTUP ALGORITMO DESARROLLADORA DE SOFTWARE 2022-2023</li>
        </ul>
        <h4>Lenguajes de programación</h4>
        <ul>
          <li>JavaScript (4 años)</li>
          <li>Typescript (1 año)</li>
          <li>HTML & CSS (5 años)</li>
        </ul>
        <h4>Frameworks & Librerias</h4>
        <ul>
          <li>Angular (3 años)</li>
          <li>React native (1 año)</li>
          <li>Bootstrap (3 años)</li>
          <li>Sass (1 año)</li>
          <li>Vue (1 año)</li>
        </ul>
        <h4>Base de datos</h4>
        <ul>
          <li>SQL (4 años)</li>
          <li>PostgreSQL  (4 años)</li>
        </ul>
        <h4>Herramientas y tecnologias</h4>
        <ul>
          <li>Git & Github (4 años)</li>
          <li>Node js (4 años)</li>
          <li>JQuery (8 meses)</li>
          <li>Figma (1 año)</li>
        </ul>
        <h4>Sistemas Operativos</h4>
        <ul>
          <li>Windows 8, 10, 11 (+ 10 años)</li>
          <li>Ubuntu (5 meses)</li>
        </ul>
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
            <li>{{ t('messages.platzi1') }}
              <img src="../assets/z_images/certificate.png" alt="logo-certificate">
            </li>
            <li>{{ t('messages.platzi2') }}
              <img src="../assets/z_images/certificate.png" alt="logo-certificate">
            </li>
            <li>{{ t('messages.platzi3') }}
              <img src="../assets/z_images/certificate.png" alt="logo-certificate">
            </li>
            <li>{{ t('messages.platzi4') }}
              <img src="../assets/z_images/certificate.png" alt="logo-certificate">
            </li>
            <li>{{ t('messages.platzi5') }}
              <img src="../assets/z_images/certificate.png" alt="logo-certificate">
            </li>
            <li>{{ t('messages.platzi6') }}
              <img src="../assets/z_images/certificate.png" alt="logo-certificate">
            </li>
            <li>{{ t('messages.platzi7') }}
              <img src="../assets/z_images/certificate.png" alt="logo-certificate">
            </li>
            <li>{{ t('messages.platzi8') }}
              <img src="../assets/z_images/certificate.png" alt="logo-certificate">
            </li>
            <li>{{ t('messages.platzi9') }}
              <img src="../assets/z_images/certificate.png" alt="logo-certificate">
            </li>
            <li>{{ t('messages.platzi10') }}
              <img src="../assets/z_images/certificate.png" alt="logo-certificate">
            </li>
          </ul>
        </div>
      </div>
    </section>
    <footer>
      <div class="box">
        <h1>{{ t('messages.footerTitle') }}</h1>
        <ul>
          <li><a href="https://github.com/DayanaB01">GitHub</a></li>
          <li><a href="www.linkedin.com/in/dayana-betancur-gañán">Linkendin</a></li>
          <li>dayanabeta08@gmail.com</li>
        </ul>
        <span>{{ t('messages.footer') }}</span>
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
