// vars
const themeSwitch = document.getElementById("theme-switch");

// event listener
themeSwitch.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});