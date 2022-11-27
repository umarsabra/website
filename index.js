const next_btn = document.getElementById("btn-next");
const prev_btn = document.getElementById("btn-prev");
const slide_container = document.getElementById("slides-container");
const slides = document.querySelectorAll(".slide");
const lang_switcher = document.getElementById("lang-switcher");

// lang_switcher.addEventListener("change", (e) => {
//   document.body.classList.add("ar-slider");
// });

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

let time_out_id;

function auto_slide() {
  next_slide();
  time_out_id = setTimeout(auto_slide, 3000);
}

setTimeout(auto_slide, 4000);
next_btn.addEventListener("click", () => {
  clearTimeout(time_out_id);
  next_slide();
});

prev_btn.addEventListener("click", () => {
  clearTimeout(time_out_id);
  prev_slide();
});
