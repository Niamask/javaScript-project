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
  // console.log(btn);
}

function closeModal() {
  // model.style.display = "none";
  // overlay.style.display = "none";
  model.classList.add("hidden");
  overlay.classList.add("hidden");
}

// console.log(btn.length);

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", openModal);
  console.log(btn[i].textContent);
}

modelClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !model.classList.contains("hidden")) {
    console.log("esc was pressed");
    closeModal();
  }
});
