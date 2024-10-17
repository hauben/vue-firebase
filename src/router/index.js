import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import { auth } from "@/firebase";

const requireAuth = (to, from, next) => {

  const user = auth.currentUser;

  if (user) {
    // Der Benutzer ist authentifiziert, erlaube den Zugriff auf die Route
    next();
  } else {
    // Der Benutzer ist nicht authentifiziert, Weiterleitung zur Anmeldeseite 
    next("/login");
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')  /* asynchrones Laden der Komponente */
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')   /* asynchrones Laden der Komponente */
    },
    /* Navigation Guard */
    {
      path: '/secret',
      name: 'secret',
      component: () => import('../views/SecretView.vue'), /* asynchrones Laden der Komponente */
      beforeEnter: requireAuth 
    }
  ]
})

export default router
