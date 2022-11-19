const next_btn = document.getElementById("btn-next");
const prev_btn = document.getElementById("btn-prev");
const slide_container = document.getElementById("slides-container");
// const slide_indecator = document.getElementById("slide-indecator");
const slides = document.querySelectorAll(".slide");

let counter = 1;

const add_animation = (active_slide) => {
  if (active_slide == 0) {
  } else if (active_slide == 5) {
  } else {
    slides.forEach((slide) => {
      slide
        .querySelector(".slide__text")
        .classList.remove("slide-text-animation");
    });
    slides[active_slide]
      .querySelector(".slide__text")
      .classList.add("slide-text-animation");
  }
};

next_btn.addEventListener("click", () => {
  slide_container.style.transition = "all .3s ease-in-out";
  counter++;
  add_animation(counter);
  slide_container.style.transform = `translateX(-${100 * counter}%)`;
  // slide_indecator.children[counter - 1].classList.add("active-point");
});

prev_btn.addEventListener("click", () => {
  slide_container.style.transition = "all .3s ease-in-out";
  counter--;
  add_animation(counter);
  slide_container.style.transform = `translateX(-${100 * counter}%)`;
});

slide_container.addEventListener("transitionend", () => {
  if (slides[counter].id === "first-clone") {
    slide_container.style.transition = "none";
    counter = 1;
    slide_container.style.transform = `translateX(-${100 * counter}%)`;
  }
  if (slides[counter].id === "last-clone") {
    slide_container.style.transition = "none";
    counter = slides.length - 2;
    slide_container.style.transform = `translateX(-${100 * counter}%)`;
  }
});
