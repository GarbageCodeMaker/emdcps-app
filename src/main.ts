import { createApp, defineAsyncComponent } from 'vue';
// Element-UI
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
import subViews from './util/subViews';
import subComponents from './util/subComponents';

const app = createApp(App);

subViews.forEach((item) => {
  const view = defineAsyncComponent(() => import(`@/views/${item}.vue`));
  app.component(item, view);
});

subComponents.forEach((item) => {
  const component = defineAsyncComponent(() => import(`@/components/${item}.vue`));
  // 根据components目录下的文件夹划分,需要对字符串进行拆分操作
  app.component(item.split('/')[1], component);
});

app.use(ElementPlus)
  .use(store)
  .use(router)
  .mount('#app');
