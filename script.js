
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

/*hamburger*/
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  
  if (!menu.classList.contains("open")) {
   
    menu.classList.add("open");
    icon.classList.add("open");
    
   
    document.body.addEventListener("click", closeMenuOnClickOutside);
  } else {

    menu.classList.remove("open");
    icon.classList.remove("open");
    
  
    document.body.removeEventListener("click", closeMenuOnClickOutside);
  }
}

function closeMenuOnClickOutside(event) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  
 
  if (
    !menu.contains(event.target) &&
    !icon.contains(event.target)
  ) {
   
    menu.classList.remove("open");
    icon.classList.remove("open");
    
  
    document.body.removeEventListener("click", closeMenuOnClickOutside);
  }
}

