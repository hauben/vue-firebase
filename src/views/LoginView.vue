<template>
  <div class="login">
    <AuthDialog />
  </div>
</template>
  

<script setup>
  import AuthDialog from '@/components/AuthDialog.vue';
</script>

<style scoped>
  .login {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
</style>