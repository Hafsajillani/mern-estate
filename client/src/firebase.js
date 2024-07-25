// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-6aed2.firebaseapp.com',
  projectId: 'mern-estate-6aed2',
  storageBucket: 'mern-estate-6aed2.appspot.com',
  messagingSenderId: '887371878241',
  appId: '1:887371878241:web:aa820f11bd16b61563ff20',
  measurementId: 'G-B0Z3GBC1KL',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)