// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDpZsceRG79FJft3Yh-14POV628pyp6ugc',
  authDomain: 'projetor-db5a9.firebaseapp.com',
  projectId: 'projetor-db5a9',
  storageBucket: 'projetor-db5a9.appspot.com',
  messagingSenderId: '35152341949',
  appId: '1:35152341949:web:067401c32a2021dda640d4',
  measurementId: 'G-XXT1M3Y1ZJ'
}

// Initialize Firebase
const firebase  = initializeApp(firebaseConfig)


 const DbConnect = getFirestore(firebase)

 export default DbConnect
