document.addEventListener('DOMContentLoaded', function () {
  // All your JavaScript code here
  $(document).ready(function () {
    // Set the interval for the slider (in milliseconds)
    var sliderInterval = 5000; // Change to your desired interval

    // Initialize the carousel with auto-sliding
    $('#carouselExampleIndicators').carousel({
      interval: sliderInterval
    });
  });
});

// Iframe youtube js

const youtubeEmbeds = document.querySelectorAll('.youtube-embed');

const options = { rootMargin: '100px' }; // Adjust as needed

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const iframe = entry.target.querySelector('iframe');
      iframe.src = iframe.dataset.src;
      entry.target.classList.add('loaded'); // Add a class to show iframe
      observer.unobserve(entry.target);
    }
  });
}, options);

youtubeEmbeds.forEach(embed => {
  observer.observe(embed);
}); 