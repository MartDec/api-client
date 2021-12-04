import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

App.data = () => ({ store });
createApp(App).mount('#app');
