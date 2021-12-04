import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

// adding store to App component
App.data = () => ({ store });

createApp(App).mount('#app');
