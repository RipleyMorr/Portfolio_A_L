
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("modal-caption");

function openModal(element) {
    modal.style.display = "block";
    modalImg.src = element.src;
    captionText.innerHTML = element.alt;
}

function closeModal() {
    modal.style.display = "none";
}


window.setTimeout(function(){
    $('.skill-progress').addClass("go");
  }, 1000);


//   PORTFOLIO

document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('#customCarousel');
  const items = carousel.querySelectorAll('.carousel__item');
  const indicators = carousel.querySelectorAll('.carousel__indicator');
  const prevButton = carousel.querySelector('.carousel__control--prev');
  const nextButton = carousel.querySelector('.carousel__control--next');
  let currentIndex = 0;

  function updateCarousel(index) {
    items.forEach((item, i) => {
      item.classList.toggle('carousel__item--active', i === index);
      indicators[i].classList.toggle('carousel__indicator--active', i === index);
    });
  }

  indicators.forEach((button, index) => {
    button.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel(currentIndex);
    });
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    updateCarousel(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    updateCarousel(currentIndex);
  });

  // Initialize the carousel to show the first item
  updateCarousel(currentIndex);
});

  
  
