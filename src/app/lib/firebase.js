import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyCdF_75DVGLd77b1ZBbtWnFMvBsaV4jCT8",
    authDomain: "bsiduta-47488.firebaseapp.com",
    projectId: "bsiduta-47488",
    storageBucket: "bsiduta-47488.firebasestorage.app",
    messagingSenderId: "1002025429734",
    appId: "1:1002025429734:web:e9cb7a08cab30be8c36927"
  };
  
const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);
export {messaging}