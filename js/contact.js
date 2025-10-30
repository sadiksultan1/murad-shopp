// contact.js
import { getFirestore, collection, addDoc } 
from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { app } from "./firebase.js";

const db = getFirestore(app);
const form = document.getElementById("feedbackForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const bill = document.getElementById("bill").value;
    const message = document.getElementById("message").value;

    try {
      await addDoc(collection(db, "feedbacks"), {
        name, phone, email, address, bill, message,
        timestamp: new Date()
      });
      alert("✅ Galatoomi! Yaada kee nuuf ergaa jirta.");
      form.reset();
    } catch (error) {
      alert("❌ Dogoggorri uumame: " + error.message);
    }
  });
}

