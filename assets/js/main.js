const moonIcon = document.querySelector(".fa-solid.fa-moon");
const sunIcon = document.querySelector(".fa-solid.fa-sun");
const body = document.querySelector("body");

const theme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (theme) {
  body.classList.toggle("dark");
  sunIcon.classList.toggle("show");
  moonIcon.classList.toggle("show");
}

moonIcon.addEventListener("click", (event) => {
  body.classList.add("dark");
  sunIcon.classList.toggle("show");
  moonIcon.classList.toggle("show");
  localStorage.setItem("theme", "dark");
});

sunIcon.addEventListener("click", (event) => {
  body.classList.remove("dark");

  moonIcon.classList.toggle("show");
  sunIcon.classList.toggle("show");
  localStorage.removeItem("theme");
});
