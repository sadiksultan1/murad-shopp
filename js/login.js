import { auth, signInWithEmailAndPassword } from "./firebase-module.js";

const form = document.getElementById("loginForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("✅ Baga nagaan deebite!");
      window.location.href = "index.html"; // gara fuula duraa
    } catch (error) {
      alert("❌ Dogoggora uumame: " + error.message);
    }
  });
}
