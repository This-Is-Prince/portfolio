import "./style.css";
import "normalize.css";

const date = document.querySelector(".date");
date.textContent = new Date().getFullYear();
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const nav = document.querySelector(".nav__wrapper");

closeBtn.addEventListener("click", () => {
  modal.style.transform = "translate(-100%)";
});
openBtn.addEventListener("click", () => {
  modal.style.transform = "translate(0)";
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 66) {
    nav.classList.add("shadow");
  } else {
    nav.classList.remove("shadow");
  }
});
