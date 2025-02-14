import { getStorage, ref } from 'firebase/storage';
// import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};
console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app, 'gs://fs-2024-b7991.appspot.com');
const storageRef = ref(storage);

export {
  storage,
  storageRef
};
