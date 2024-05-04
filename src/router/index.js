import { createRouter, createWebHistory } from 'vue-router'
import Listagem from '../views/Listagem.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:start/:finish',
      name: 'Listagem',
      component: Listagem
    }
  ]
})

router.afterEach((to, from) => {
  console.log('Rota mudou para:', to.fullPath);
});


export default router
