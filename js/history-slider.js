// script.js
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;
const slideWidth = slides[0].offsetWidth;  // Get the width dynamically

gsap.set(slider, { x: 0 }); // Initial position

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length; // Loop back to beginning
  gsap.to(slider, { x: -currentSlide * slideWidth, duration: 0.5, ease: "power1.inOut" });
});


prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop back to end
  gsap.to(slider, { x: -currentSlide * slideWidth, duration: 0.5, ease: "power1.inOut" });
});