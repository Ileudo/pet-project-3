import { $, Elem } from '../core';

Elem.prototype.carousel = function () {
  for (let i = 0; i < this.length; i++) {
    const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
    const slides = this[i].querySelectorAll('.carousel-item');
    const slidesField = this[i].querySelector('.carousel-slides');
    const indicators = this[i].querySelectorAll('.carousel-indicators li');

    slidesField.style.width = 100 * slides.length + '%';
    slides.forEach((slide) => {
      slide.style.width = width;
    });

    let offset = 0;
    let slideIndex = 0;

    $(this[i].querySelector('[data-slide="next"]')).click((e) => {
      e.preventDefault();
      if (offset === width.replace(/\D/g, '') * (slides.length - 1)) {
        offset = 0;
        slideIndex = 0;
      } else {
        offset += Number(width.replace(/\D/g, ''));
        slideIndex++;
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      indicators.forEach((indicator) => indicator.classList.remove('active'));
      indicators[slideIndex].classList.add('active');
    });

    $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
      e.preventDefault();
      if (offset === 0) {
        offset = width.replace(/\D/g, '') * (slides.length - 1);
        slideIndex = slides.length - 1;
      } else {
        offset -= Number(width.replace(/\D/g, ''));
        slideIndex--;
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      indicators.forEach((indicator) => indicator.classList.remove('active'));
      indicators[slideIndex].classList.add('active');
    });

    const sliderId = this[i].getAttribute('id');

    $(`#${sliderId} .carousel-indicators li`).click((e) => {
      const slideTo = e.target.dataset.slideTo;
      slideIndex = slideTo;

      offset = Number(width.replace(/\D/g, '')) * slideTo;
      slidesField.style.transform = `translateX(-${offset}px)`;

      indicators.forEach((indicator) => indicator.classList.remove('active'));
      indicators[slideIndex].classList.add('active');
    });
  }
};

$('.carousel').carousel();
