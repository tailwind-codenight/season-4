// vars
const sidebar = document.getElementById("sidebar-menu");
const sidebarBackground = document.getElementById("sidebar-menu-background");
const sidebarButton = document.getElementById("sidebar-menu-button");
const themeSwitch = document.getElementById("theme-switch");

// event listener
sidebarButton.addEventListener("click", () => {
  sidebar.classList.remove("invisible");
  sidebarBackground.classList.remove("invisible");
});
themeSwitch.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

// functions
const closeSidebar = () => {
  sidebar.classList.add("invisible");
  sidebarBackground.classList.add("invisible");
};
