//? Get the different buttons and the body
var lightButton = document.getElementById("light");
var darkButton = document.getElementById("dark");
var solarButton = document.getElementById("solar");
var body = document.body;

//? Get the preferred theme from localStorage
var theme = localStorage.getItem("theme");
var isSolar = localStorage.getItem("solar");

//? If the user has set a theme in their system settings, those settings are used
if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList.replace("light", "dark");
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList.replace("dark", "light");
  }
}

//? Check if the user has set a theme, and apply it if they have
if (theme) {
  if (theme === "dark") {
    body.classList.replace("light", theme);
  } else if (theme === "light") {
    body.classList.replace("dark", theme);
  }
}

//? Check if the user has solar theme on
if (isSolar) {
  body.classList.add("solar");
  solarButton.innerText = "Not solarized";
}

//? Add the event listeners for the different buttons
lightButton.addEventListener("click", () => {
  body.classList.replace("dark", "light");
  localStorage.setItem("theme", "light");
});

//? Add the event listeners for the different buttons
darkButton.addEventListener("click", () => {
  body.classList.replace("light", "dark");
  localStorage.setItem("theme", "dark");
});

//? Add the event listeners for the different buttons
solarButton.addEventListener("click", () => {
  let result = body.classList.toggle("solar");
  if (result) {
    solarButton.innerText = "Not solarized";
    localStorage.setItem("solar", true);
  } else {
    solarButton.innerText = "Solarized";
    localStorage.removeItem("solar");
  }
});
