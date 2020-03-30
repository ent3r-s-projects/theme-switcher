var lightButton = document.getElementById("light");
var darkButton = document.getElementById("dark");
var solarButton = document.getElementById("solar");
var body = document.body;

var theme = localStorage.getItem("theme");
var isSolar = localStorage.getItem("solar");

if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
  //? This means dark theme preference is set in the operating system settings
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList.replace("light", "dark");
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList.replace("dark", "light");
  }
}

if (theme) {
  if (theme === "dark") {
    body.classList.replace("light", theme);
  } else if (theme === "light") {
    body.classList.replace("dark", theme);
  }
}

if (isSolar) {
  body.classList.add("solar");
  solarButton.innerText = "Not solarized";
}

lightButton.addEventListener("click", () => {
  body.classList.replace("dark", "light");
  localStorage.setItem("theme", "light");
});

darkButton.addEventListener("click", () => {
  body.classList.replace("light", "dark");
  localStorage.setItem("theme", "dark");
});

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
