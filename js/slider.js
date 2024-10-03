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