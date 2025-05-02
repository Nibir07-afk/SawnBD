// Theme Switcher
document.getElementById("theme-switch").addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");
});

// Language Switcher
document.getElementById("language-switch").addEventListener("change", function() {
  const language = this.value;
  if(language === "en") {
    alert("Language switched to English");
    // Additional logic for changing content to English
  } else {
    alert("ভাষা বাংলায় পরিবর্তিত হয়েছে");
    // Additional logic for changing content to Bangla
  }
});
function rate(stars) {
  document.getElementById("rating-result").textContent = "You rated " + stars + " stars!";
}
