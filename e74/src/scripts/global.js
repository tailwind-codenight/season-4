// vars
const themeSwitch = document.getElementById("theme-switch");

themeSwitch.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
