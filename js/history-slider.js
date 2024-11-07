document.addEventListener('DOMContentLoaded', function () {
  const slidesWrapper = document.querySelector('.story-slides-wrapper');
  const prevButton = document.querySelector('.story-slider-control.prev');
  const nextButton = document.querySelector('.story-slider-control.next');
  const indicatorsContainer = document.querySelector('.story-slider-indicators');

  let sliderSlides;
  let numSlides;
  let currentSlide = 0;
  let sliderInterval = null;

  function initSlider() {
    sliderSlides = document.querySelectorAll('.story-slide');
    numSlides = sliderSlides.length;

    for (let i = 0; i < numSlides; i++) {
      const indicator = document.createElement('span');
      indicator.classList.add('story-slider-indicator');
      indicator.addEventListener('click', () => goToSlide(i));
      indicatorsContainer.appendChild(indicator);
    }

    updateIndicators();
    adjustSliderHeight();
    startTimer();
  }

  initSlider();

  function nextSlide() {
    goToSlide((currentSlide + 1) % numSlides);
  }

  function prevSlide() {
    goToSlide((currentSlide - 1 + numSlides) % numSlides);
  }

  function goToSlide(index) {
    const direction = (index < currentSlide && !(index === 0 && currentSlide === numSlides - 1)) || (index === numSlides - 1 && currentSlide === 0) ? 'prev' : 'next';
    slidesWrapper.classList.add('transitioning', direction);

    sliderSlides[currentSlide].classList.remove('active');
    currentSlide = index;
    sliderSlides[currentSlide].classList.add('active');

    updateIndicators();
    adjustSliderHeight();
    resetTimer();

    setTimeout(() => {
      slidesWrapper.classList.remove('transitioning', direction);
    }, 700);
  }

  function updateIndicators() {
    const indicators = document.querySelectorAll('.story-slider-indicator');
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentSlide);
      indicator.textContent = "";

      if (index === currentSlide) {
        indicator.setAttribute('aria-current', 'true');
      } else {
        indicator.removeAttribute('aria-current');
      }
    });
  }

  function adjustSliderHeight() {
    const whoArea = document.querySelector('.who_area');
    const activeSlide = sliderSlides[currentSlide];
    const activeSlideHeight = activeSlide ? activeSlide.clientHeight : 0;
  }

  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  function startTimer() {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlide, 5000);
  }

  function resetTimer() {
    if (sliderInterval) {
      clearInterval(sliderInterval);
      startTimer();
    }
  }
});