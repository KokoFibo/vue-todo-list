import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDR7SYY_u_uFLulz_olyutX1JwBLik5dM0',
  authDomain: 'badass-todo-c42ae.firebaseapp.com',
  projectId: 'badass-todo-c42ae',
  storageBucket: 'badass-todo-c42ae.appspot.com',
  messagingSenderId: '33942881721',
  appId: '1:33942881721:web:a01b9477d54ea320bf6268',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
