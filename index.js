const next_btn = document.getElementById("btn-next");
const prev_btn = document.getElementById("btn-prev");
const slide_container = document.getElementById("slides-container");
const slides = document.querySelectorAll(".slide");

let counter = 1;

const next_slide = () => {
  slide_container.style.transition = "all .3s ease-in-out";
  counter++;
  add_animation(counter);
  slide_container.style.transform = `translateX(-${100 * counter}%)`;
};

const prev_slide = () => {
  slide_container.style.transition = "all .3s ease-in-out";
  counter--;
  add_animation(counter);
  slide_container.style.transform = `translateX(-${100 * counter}%)`;
};

setTimeout(next_slide, 1000);

const add_animation = (active_slide) => {
  if (active_slide == 0) {
  } else if (active_slide == 5) {
  } else {
    slides.forEach((slide) => {
      slide
        .querySelector(".slide__text")
        .classList.remove("slide-text-animation");
      slide
        .querySelector(".slide__img")
        .classList.remove("slide-img-animation");
    });
    slides[active_slide]
      .querySelector(".slide__text")
      .classList.add("slide-text-animation");
    slides[active_slide]
      .querySelector(".slide__img")
      .classList.add("slide-img-animation");
  }
};

// next_btn.addEventListener("click", () => next_slide);

// prev_btn.addEventListener("click", () => prev_slide);

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

function auto_slide() {
  next_slide();
  setTimeout(auto_slide, 3000);
}
setTimeout(auto_slide, 3000);
