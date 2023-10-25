// Get all the "Show Skill" elements
const toggleSkillElements = document.querySelectorAll(".toggle-skill");

// Add click event listeners to each "Show Skill" element
toggleSkillElements.forEach((toggleSkill) => {
    toggleSkill.addEventListener("click", () => {
        // Find the associated skill description
        const skillDescription = toggleSkill.nextElementSibling;

        // Toggle the display of the skill description
        if (skillDescription.style.display === "block") {
            skillDescription.style.display = "none";
        } else {
            skillDescription.style.display = "block";
        }
    });
});


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
