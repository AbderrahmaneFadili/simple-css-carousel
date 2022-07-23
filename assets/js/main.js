const moonIcon = document.querySelector(".fa-solid.fa-moon");
const sunIcon = document.querySelector(".fa-solid.fa-sun");
const body = document.querySelector("body");

moonIcon.addEventListener("click", (event) => {
  body.classList.add("dark");
  sunIcon.classList.toggle("show");
  moonIcon.classList.toggle("show");
});

sunIcon.addEventListener("click", (event) => {
  body.classList.remove("dark");
  moonIcon.classList.toggle("show");
  sunIcon.classList.toggle("show");
});
