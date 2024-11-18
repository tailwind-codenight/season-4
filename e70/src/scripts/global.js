// vars
// * get prefers color scheme media
const PCSMedia = window.matchMedia("(prefers-color-scheme: dark)");

// functions
const setTheme = (theme) => {
  // check if dark or light theme requested
  if (theme === "dark" || theme === "light") {
    // set and remove classes
    document.documentElement.classList.add(
      theme === "light" ? "light" : "dark",
    );
    document.documentElement.classList.remove(
      theme === "light" ? "dark" : "light",
    );
    // update localstorage
    window.localStorage.setItem("theme", theme);

    // check if system theme requested
  } else if (theme === "system") {
    // vars
    // * get current user browser theme
    const currentSystemTheme = PCSMedia.matches ? "dark" : "light";

    // set and remove classes
    document.documentElement.classList.add(
      currentSystemTheme === "light" ? "light" : "dark",
    );
    document.documentElement.classList.remove(
      currentSystemTheme === "light" ? "dark" : "light",
    );
    // update localstorage
    window.localStorage.setItem("theme", theme);

    // check if no or invalid theme provided
  } else {
    // vars
    // * get current stored theme from localstorage
    const storedTheme = window.localStorage.getItem("theme");

    // check if a valid theme value stored on localstorage
    if (
      storedTheme === "light" ||
      storedTheme === "dark" ||
      storedTheme === "system"
    ) {
      // recall current function with valid theme as arg
      setTheme.call(this, storedTheme);
    } else {
      // recall current function with system theme as arg
      setTheme.call(this, "system");
    }
  }
};

// call setTheme to set initial theme
setTheme();

// event listeners
// * listen for system theme changes
PCSMedia.addEventListener("change", () => {
  setTheme();
});
