
const rangeDiv = document.querySelector('.price-range__container');
const inputMin = document.querySelector('.price-range__input--left');
const inputMax = document.querySelector('.price-range__input--right');

const burgerIcon = document.querySelector('.main-header__menu-icon');
const burgerClose = document.querySelector('.main-header__close-icon');
const navMenu = document.querySelector('.main-menu');
const mainMenu = document.querySelector('.main-menu__list');
const burgerButton = document.querySelector('.main-header__burger-button');

navMenu.classList.remove('main-menu--nojs');

burgerIcon.addEventListener('click', () => {
  burgerIcon.style.display = 'none';
  burgerClose.style.display = 'block';
  mainMenu.style.display = 'block';
})

burgerClose.addEventListener('click', () => {
  burgerIcon.style.display = 'block';
  burgerClose.style.display = 'none';
  mainMenu.style.display = 'none';
})

const inputs = [inputMin, inputMax];

noUiSlider.create(rangeDiv, {
  start: [0, 900],
  connect: [false, true, false],
  step: 1,
  range: {
    min: 0,
    max: 1000,
  }
});

rangeDiv.noUiSlider.on('update', function (values, handle) {
  inputs[handle].value = values[handle];
});

const selectSingle = document.querySelector('.cards__form-select');
const selectSingle_title = selectSingle.querySelector('.cards__form-select-title');
const selectSingle_labels = selectSingle.querySelectorAll('.cards__form-select-label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

// SLIDERS

const sliderWrapper = document.querySelector('.coffee-slider__wrapper-inside');
const prevButton = document.querySelector('.coffee-slider__button-arrow--left');
const nextButton = document.querySelector('.coffee-slider__button-arrow--right');
const slides = document.querySelectorAll('.coffee-slider__navigation-indicator');

let position = 0;
let slideIndex = 0;

const nextSlide = () => {
  if (document.body.clientWidth < 768) {
    if (position < 640) {
      position += 320;
      slideIndex++;
    } else {
      position = 0;
      slideIndex = 0;
    }
  }

  if (document.body.clientWidth >= 768 && document.body.clientWidth < 1440) {
    if (position < 1536) {
      position += 768;
      slideIndex++;
    } else {
      position = 0;
      slideIndex = 0;
    }
  }

  if (document.body.clientWidth >= 1440) {
    if (position < 2880) {
      position += 1440;
      slideIndex++;
    } else {
      position = 0;
      slideIndex = 0;
    }
  }

  sliderWrapper.style.left = -position + 'px';
  currentSlide(slideIndex);
}

const prevSlide = () => {
  if (document.body.clientWidth < 768) {
    if (position > 0) {
      position -= 320;
      slideIndex--;
    } else {
      position = 640;
      slideIndex = (slides.length - 1);
    }
  }

  if (document.body.clientWidth >= 768 && document.body.clientWidth < 1440) {
    if (position > 0) {
      position -= 768;
      slideIndex--;
    } else {
      position = 1536;
      slideIndex = (slides.length - 1);
    }
  }

  if (document.body.clientWidth >= 1440) {
    if (position > 0) {
      position -= 1440;
      slideIndex--;
    } else {
      position = 2880;
      slideIndex = (slides.length - 1);
    }
  }

  sliderWrapper.style.left = -position + 'px';
  currentSlide(slideIndex);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

slides.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    if (document.body.clientWidth < 768) {
      position = 320 * index;
      sliderWrapper.style.left = -position + 'px';
      slideIndex = index;
      currentSlide(slideIndex);
    }
    position = 1440 * index;
    sliderWrapper.style.left = -position + 'px';
    slideIndex = index;
    currentSlide(slideIndex);
  })
})

const currentSlide = (index) => {
  for (let slide of slides) {
    slide.classList.remove('coffee-slider__navigation-indicator--active');
  }
  slides[index].classList.add('coffee-slider__navigation-indicator--active');
}

// setInterval(() => {
//   nextSlide();
// }, 3000)