// Name registered in the system
const registeredName = "Nendita"; // Ganti ini dengan nama yang diinginkan

function validateName() {
  const nameInput = document.getElementById("nameInput").value.trim();
  const errorMessage = document.getElementById("errorMessage");

  if (nameInput === registeredName) {
    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("greeting-section").classList.remove("hidden");
    document.getElementById("specialName").textContent = registeredName;
  } else {
    errorMessage.textContent = "Nama tidak dikenali. Coba lagi.";
    errorMessage.style.color = "red";
  }
}
