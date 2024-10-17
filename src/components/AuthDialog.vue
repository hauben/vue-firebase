<template>
    <div class="auth-dialog">
      <div class="tabs">
        <button :class="{ active: activeTab === 'login' }" @click="setActiveTab('login')">Login</button>
        <button :class="{ active: activeTab === 'signup' }" @click="setActiveTab('signup')">Signup</button>
      </div>

      <form v-show="activeTab === 'login'" @submit.prevent="submitLogin">
        <div class="tab-content">
          <label for="login-email">Email:</label>

          <input v-model="login.email" 
                 type="email" 
                 id="login-email"
                 autocomplete="username" />
    
          <label for="login-password">Passwort:</label>

          <input v-model="login.password" 
                 type="password" 
                 id="login-password"
                 autocomplete="current-password" />
          
          <button @click="submit">Login</button>
        </div>
      </form>  
    
      <form v-show="activeTab === 'signup'" @submit.prevent="submitSignup">
        <div class="tab-content">
          <label for="signup-email">Email:</label>

          <input v-model="signup.email" 
                 type="email" 
                 id="signup-email"
                 autocomplete="username" />
    
          <label for="signup-password">Passwort:</label>
          <input v-model="signup.password" 
                 type="password" 
                 id="signup-password"
                 autocomplete="new-password" />
    
          <label for="signup-confirm-password">Password bestätigen:</label>
          <input v-model="signup.confirmPassword" 
                 type="password" 
                 id="signup-confirm-password"
                 autocomplete="new-password" />
          
          <button @click="submit">Signup</button>
        </div>
      </form>

      <span class="error-message" v-if="error">{{ error }}</span>

    </div>
</template>
  
<script setup>
  import { ref } from 'vue';
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

  import { useRouter } from 'vue-router';

  const auth = getAuth();

  const router = useRouter(); 

  const activeTab = ref('login');
  const error = ref('');
  
  const login = {
    email: '',
    password: '',
  };
  
  const signup = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const setActiveTab = (tab) => {
    activeTab.value = tab;
    error.value = ''; // Reset the error message beim Tab Wechsel
  };

  const submitLogin = async () => {
    try {
          await signInWithEmailAndPassword(auth, login.email, login.password);
          console.log('Login successful');

          // Redirect auf /secret nach einem erfolgreichen Login
          router.push('/secret');

          // Reset Formular-Felder und etwaige error Nachrichten
          error.value = '';
          resetForms();
    } catch (error) {
      error.value = error.message;
      console.log(`login error ${error}`);
    }
  };

  const submitSignup = async () => {
    try {

      if (signup.password !== signup.confirmPassword) {
          error.value = 'Passwörter stimmen nicht überein.';
          return;
      }

      await createUserWithEmailAndPassword(auth, signup.email, signup.password);
      console.log('Signup erfolgreich');

      // Redirect auf /secret nach einem erfolgreichen Registrierung
      router.push('/secret');

      // Reset Formular-Felder und etwaige error Nachrichten
      error.value = '';
      resetForms();
    } catch (error) {
      error.value = error.message;
      console.log(`signup error ${error}`);
    }
  };

  const resetForms = () => {
      login.email = login.password = '';
      signup.email = signup.password = signup.confirmPassword = '';
  };
</script>
  
<style scoped>
.auth-dialog {
  width: 300px;
  margin: auto;
  margin-top: 2em;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.tabs {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
}

.tabs button {
  padding: 8px 16px;
  border: none;
  background-color: #ffc400;
  cursor: pointer;
}

.tabs button.active {
  background-color: #0787f7;
}

.tab-content {
  display: flex;
  flex-direction: column; 
}

.tab-content label {
  margin-bottom: 6px;
}

.tab-content input {
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box; /* Added to include padding in input width */
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid rgb(137, 137, 137);
}

button:hover {
 border: 2px solid black;
}

.error-message {
  color: red;
  margin-top: 10px;
  display: block;
  text-align: center;
}
</style>
