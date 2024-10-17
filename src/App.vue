<template>
  <header>
    <div class="logos">
      <img alt="Vue logo" src="@/assets/logo.svg" width="125" height="125" />
      <img alt="Firebase logo" src="@/assets/firebase-logo.png" width="125" height="125" />
    </div>

    <div class="wrapper">
      <HomeScreen/>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/secret">Secret</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>


<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import HomeScreen from './components/HomeScreen.vue'
</script>


<style scoped>
  header {
    line-height: 1.5;
    margin-top: 3em;
  }

  .logos {
    display: flex;
    justify-content: center;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }
</style>
