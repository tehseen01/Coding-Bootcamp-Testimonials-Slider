const prevButton = document.getElementById("btn-prev");
const nextButton = document.getElementById("btn-next");
const slide = document.getElementsByClassName("slide");

if (!slide.length == 0) {
  let slideIndex = 1;
  showSlide(slideIndex);

  function nextSlide(n) {
    showSlide((slideIndex += n));
  }

  function showSlide(n) {
    if (n > slide.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slide.length;
    }

    for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
    }
    slide[slideIndex - 1].style.display = "grid";
  }
}

nextButton.onclick = () => {
  nextSlide(1);
};

prevButton.onclick = () => {
  nextSlide(-1);
};
