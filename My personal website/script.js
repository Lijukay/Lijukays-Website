const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");
const home = body.querySelector(".home");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});
const toggleButton = document.querySelector(".toggle-button");

body.addEventListener("click", (event) => {
  const target = event.target;
  const isClickInsideSidebar = sidebar.contains(target);
  const isClickInsideToggleButton = toggleButton.contains(target);

  if (!isClickInsideSidebar && !isClickInsideToggleButton) {
    home.classList.remove("close");
  }
});
