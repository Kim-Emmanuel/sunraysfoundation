document.addEventListener('DOMContentLoaded', function () {
  const sliderSlides = document.querySelectorAll('.slide');
  const numSlides = sliderSlides.length;
  let currentSlide = 0;


  // Select slider elements
  const slidesWrapper = document.querySelector('.slides-wrapper');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const indicatorsContainer = document.querySelector('.slide-indicators');

  // Create indicator dots dynamically
  for (let i = 0; i < numSlides; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('slider-indicator');
    indicator.addEventListener('click', () => goToSlide(i));
    indicatorsContainer.appendChild(indicator);
  }


  // Initialize slider
  function initSlider() {  // Declare initSlider function
    updateIndicators();
    adjustSliderHeight();
    startTimer();
  }

  initSlider(); // Call initSlider to initialize

  let sliderInterval; // Declare sliderInterval in the outer scope


  function nextSlide() {
    goToSlide((currentSlide + 1) % numSlides);
  }

  function prevSlide() {
    goToSlide((currentSlide - 1 + numSlides) % numSlides);
  }


  function goToSlide(index) {
    sliderSlides[currentSlide].classList.remove('active');
    currentSlide = index;
    sliderSlides[currentSlide].classList.add('active');

    updateIndicators();
    adjustSliderHeight();

    resetTimer();
  }

  function updateIndicators() {
    const indicators = document.querySelectorAll('.slide-indicator');
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentSlide);

      // Correctly set aria attributes for accessibility
      if (index === currentSlide) {
        indicator.setAttribute('aria-current', 'true');
      } else {
        indicator.removeAttribute('aria-current');
      }
    });

    indicatorsContainer.textContent = `${currentSlide + 1} / ${numSlides}`;
  }

  function adjustSliderHeight() {
    const whoArea = document.querySelector('.who_area');
    const activeSlide = sliderSlides[currentSlide];
    const activeSlideHeight = activeSlide ? activeSlide.clientHeight : 0; // Check if activeSlide exists

    whoArea.style.height = activeSlideHeight + 'px';
    slidesWrapper.style.height = activeSlideHeight + 'px';
  }

  // Attach event listeners to the buttons
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  // Autoplay functionality
  function startTimer() {
    sliderInterval = setInterval(nextSlide, 5000);
  }

  function resetTimer() {
    clearInterval(sliderInterval);
    startTimer();
  }


});