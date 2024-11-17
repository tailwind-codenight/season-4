// vars
const sidebar = document.getElementById("sidebar-menu");
const sidebarBackground = document.getElementById("sidebar-menu-background");
const sidebarButton = document.getElementById("sidebar-menu-button");

// event listener
sidebarButton.addEventListener("click", () => {
  sidebar.classList.remove("invisible");
  sidebarBackground.classList.remove("invisible");
});

// functions
const closeSidebar = () => {
  sidebar.classList.add("invisible");
  sidebarBackground.classList.add("invisible");
};
