// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

// ✅ Firebase configuration (sirreeffame)
const firebaseConfig = {
  apiKey: "AIzaSyCT5JSoNhvvh-nXUeUGuv_8FHw7CJTFHJY",
  authDomain: "murad-shop-b1beb.firebaseapp.com",
  projectId: "murad-shop-b1beb",
  storageBucket: "murad-shop-b1beb.appspot.com", // ✅ sirreessitee: .app → .appspot.com
  messagingSenderId: "473819630547",
  appId: "1:473819630547:web:c580d72049a3ba79e67d26",
  measurementId: "G-8GWN63D8SP"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Export both app and auth for use in other files
export { app, auth };

console.log("✅ Firebase.js connected successfully!");

