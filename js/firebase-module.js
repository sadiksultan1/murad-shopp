// firebase-module.js
import { app, auth } from "./firebase.js";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

// Export functions
export { app, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };

console.log("✅ Firebase-module.js loaded successfully!");

