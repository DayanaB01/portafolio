<template>
    <div class="forms">
    <h1>{{ t('messages.tituloForm') }}</h1>
    <p>{{ t('messages.subtituloForm') }}</p>
      <form action="https://formspree.io/f/xyyvzpvb" method="post">
        <span>{{ t('messages.name') }}</span>
          <input type="text" name="name" class="form-control">
        <span>{{ t('messages.email') }}</span>
          <input type="text" name="email" class="form-control">
        <label for="case">{{ t('messages.message') }}<br>
          <textarea name="textarea" id="" cols="30" rows="10">
          </textarea>
        </label><br><br>
        <button type="submit">{{ t('messages.boton') }}</button>
      </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import enUS from '../../locales/en.json';

type MessageSchema = typeof enUS;

type NumberSchema = {
  currency: {
    style: 'currency',
    currencyDisplay: 'symbol'
    currency: string
  }
};

export default defineComponent({
  name: 'ComponentForm',
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
