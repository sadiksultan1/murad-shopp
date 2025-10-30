import { auth, createUserWithEmailAndPassword } from "./firebase-module.js";

const form = document.getElementById("signupForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("✅ Galatoomi! Account kee uumame.");
      window.location.href = "login.html";
    } catch (error) {
      alert("❌ Dogoggora uumame: " + error.message);
    }
  });
}
