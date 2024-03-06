import { createApp } from 'vue';
import App from './App.vue';
import router from "./router"; // Import the correct router object

const app = createApp(App);
app.use(router);
app.mount('#app');
// Apply global CSS styles
app.config.globalProperties.$style = document.createElement('style');
app.config.globalProperties.$style.textContent = `
  body {
    background-color: #eeaf61;
  }
`;
document.head.appendChild(app.config.globalProperties.$style);