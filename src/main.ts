import { createApp } from 'vue';
// Element-UI
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requireAuth)) {
//     console.log('需要登录');
//     if (localStorage.token) {
//       next();
//     } else {
//       next({
//         path: '/',
//         query: {
//           redirect: to.fullPath,
//         },
//       });
//     }
//   }
// });

createApp(App)
  .use(ElementPlus)
  .use(store)
  .use(router)
  .mount('#app');
