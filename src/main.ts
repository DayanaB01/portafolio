import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
eslint-disable-next-line to ignore the next line;

createApp(App).use(store).use(router).mount('#app');

