"use strict";

const btn = document.querySelectorAll(".show-modal");
const overlay = document.querySelector(".overlay");
const model = document.querySelector(".model");
const modelClose = document.querySelector(".close-model");

function openModal() {
  // model.style.display = "block";
  // overlay.style.display = "block";
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
  console.log(btn);
}

function closeModal() {
  model.style.display = "none";
  overlay.style.display = "none";
}

console.log(btn.length);

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", openModal);
}

modelClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
