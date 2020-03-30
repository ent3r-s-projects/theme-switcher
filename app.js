var lightButton = document.getElementById("light");
var darkButton = document.getElementById("dark");
var solarButton = document.getElementById("solar");
var body = document.body;

var theme = localStorage.getItem("theme");
var isSolar = localStorage.getItem("solar");

if (theme) {
  body.classList.replace("light", theme);
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
