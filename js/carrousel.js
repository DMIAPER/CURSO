let overlay = document.querySelector(".overlay");
let carrousel = document.querySelector(".carrousel");
let slides = document.querySelectorAll(".carrousel .slide");
let rigthArrow = document.querySelector(".rigth-arrow");
let leftArrow = document.querySelector(".left-arrow");
let counter = 0;

function loadSlide() {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.left = carrousel.offsetWidth * -i + "px";
  }
}

function openModal() {
  overlay.style.display = "block";
  carrousel.style.display = "block";
  loadSlide();
  updateArrowState(0);
}

function clossModal() {
  overlay.style.display = "none";
  carrousel.style.display = "none";
}

function nextSlide() {
  updateArrowState(1);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.left = slides[i].offsetLeft + carrousel.offsetWidth + "px";
  }
}

function prevSlide() {
  updateArrowState(-1);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.left = slides[i].offsetLeft - carrousel.offsetWidth + "px";
  }
}

function updateArrowState(e) {
  counter += e;

  if (counter !== 0) {
    leftArrow.style.display = "flex";
  } else {
    leftArrow.style.display = "none";
  }

  if (counter === slides.length - 1) {
    rigthArrow.style.display = "none";
  } else {
    rigthArrow.style.display = "flex";
  }

  rigthArrow.style.pointerEvents = "none";
  leftArrow.style.pointerEvents = "none";

  setTimeout(() => {
    rigthArrow.style.pointerEvents = "auto";
    leftArrow.style.pointerEvents = "auto";
  }, 900);
}
