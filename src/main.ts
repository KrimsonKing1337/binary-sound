import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'reset-css';
import '@/assets/fonts/fonts.css';

createApp(App).use(store).use(router).mount('#app');
