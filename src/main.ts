import { createApp, defineAsyncComponent } from 'vue';
// Element-UI
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
import subComponents from './util/subComponents';

const app = createApp(App);

subComponents.forEach((item) => {
  const component = defineAsyncComponent(() => import(`@/views/${item}.vue`));
  app.component(item, component);
});

app.use(ElementPlus)
  .use(store)
  .use(router)
  .mount('#app');
