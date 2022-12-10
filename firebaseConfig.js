import { initializeFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDfhNVxeXVxOnY9qN7JBBt_NYoNm_B3PEU",
  authDomain: "to-do-list-e718f.firebaseapp.com",
  projectId: "to-do-list-e718f",
  storageBucket: "to-do-list-e718f.appspot.com",
  messagingSenderId: "187785548939",
  appId: "1:187785548939:web:c0413e9b259d8a9f8c308e",
  measurementId: "G-SR57CN0XR7"
  };  

const app = initializeApp(firebaseConfig)
const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});

export { db }