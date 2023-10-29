

const btns = document.querySelectorAll(".navigation__col");
const slideVideo = document.querySelectorAll(".slider__video");
const slides = document.querySelectorAll(".slider__right__image");

let sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slideVideo.forEach((slideVideo) => {
    slideVideo.classList.remove("active");
  });

  slides.forEach((slides) => {
    slides.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slideVideo[manual].classList.add("active");
  slides[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});