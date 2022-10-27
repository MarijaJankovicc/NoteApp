// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDqs7l4uowucdR0ykIYm1n568LRnzudoRA',
  authDomain: 'note-app-5955b.firebaseapp.com',
  projectId: 'note-app-5955b',
  storageBucket: 'note-app-5955b.appspot.com',
  messagingSenderId: '770195590616',
  appId: '1:770195590616:web:7e5bef671c096cfda0b6ad',
  measurementId: 'G-KCBR7V11PW'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);