let slideIndex = 0;

function moveSlide(step) {
  const cards = document.querySelectorAll(".carousel-slide .card");
  slideIndex = (slideIndex + step + cards.length) % cards.length;
  document.querySelector(".carousel-slide").style.transform = `translateX(-${slideIndex * 100}%)`;
}
