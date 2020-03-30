var light = document.getElementById("light");
var dark = document.getElementById("dark");
var solar = document.getElementById("solar");
var body = document.body;

var theme = localStorage.getItem("theme");
var isSolar = localStorage.getItem("solar");

if (theme) {
  body.classList.replace("light", theme);
}

if (isSolar) {
  body.classList.add("solar");
  solar.innerText = "Not solarized";
}

light.addEventListener("click", () => {
  body.classList.replace("dark", "light");
  localStorage.setItem("theme", "light");
});

dark.addEventListener("click", () => {
  body.classList.replace("light", "dark");
  localStorage.setItem("theme", "dark");
});

solar.addEventListener("click", () => {
  let result = body.classList.toggle("solar");
  if (result) {
    solar.innerText = "Not solarized";
    localStorage.setItem("solar", true);
  } else {
    solar.innerText = "Solarized";
    localStorage.removeItem("solar");
  }
});
