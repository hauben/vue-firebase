import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIza123453gYHI0mpIpZf-zwrMtAPvmgcY4",
    authDomain: "vue-login-1234.firebaseapp.com",
    projectId: "vue-login-1234",
    storageBucket: "vue-login-1234.appspot.com",
    messagingSenderId: "1003012340597",
    appId: "1:101234690597:web:2a0d4d11234a0a6fb1a4c"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };