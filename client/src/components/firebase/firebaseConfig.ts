// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA_stdGSMRhh2Ufln3uv32QjqUYtr_f2As',
  authDomain: 'car-showcase-994dc.firebaseapp.com',
  projectId: 'car-showcase-994dc',
  storageBucket: 'car-showcase-994dc.appspot.com',
  messagingSenderId: '929451113582',
  appId: '1:929451113582:web:66f24bb1cc97baee223a7f',
  measurementId: 'G-MPV1K6LQHJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
