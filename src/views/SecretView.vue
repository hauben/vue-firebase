<template>
    <div class="container">
      <h1>Geschützter Bereich</h1>
      <p>Ausschließlich für registrierte Benutzer einsehbar.</p>
      <button @click="logout">Logout</button>
    </div>
</template>

<script setup>
  import { getAuth, signOut } from "firebase/auth";
  import { useRouter } from 'vue-router';

  const auth = getAuth();

  const router = useRouter(); 

  const logout = async () => {
    try {
      await signOut(auth);
      console.log('Logout successful');

      // auto-redirect auf / nach einem Logout
      router.push({ name: 'home' });
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
</script>

<style scoped>
  .container {
      text-align: center;
      margin-top: 2em;
  }

  h1 {
      font-weight: bold;
      color: red;
  }

  button {
    padding: 10px;
    margin-top: 1em;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid rgb(137, 137, 137);
}
</style>