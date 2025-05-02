// JavaScript to change background color of the webpage
document.getElementById('changeColorBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === 'lightblue' ? '#f4f4f4' : 'lightblue';
});
const themeSwitcher = document.getElementById("theme-switcher");

themeSwitcher.addEventListener("change", function () {
  document.body.className = ""; // Reset theme
  document.body.classList.add(this.value);
});
const themeSwitcher = document.getElementById("theme-switcher");

themeSwitcher.addEventListener("change", function () {
  document.body.className = ""; // Reset theme
  document.body.classList.add(this.value);
});
