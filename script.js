const themeBtn = document.getElementById("themeToggle");
const langSelect = document.getElementById("langToggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

langSelect.addEventListener("change", (e) => {
  const lang = e.target.value;
  alert("Language switched to: " + lang);
  // Future: Load JSON translations dynamically
});
