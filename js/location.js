function initMap() {
  // Initialize maps for each country (replace with your own coordinates)
  initCountryMap('map-south-sudan', -1.2921, 36.8219);
  initCountryMap('map-kenya', -1.2921, 36.8219);
  initCountryMap('map-uganda', 1.3733, 32.2903);
  initCountryMap('map-lesotho', -29.6099, 28.2336);
}

function initCountryMap(mapId, lat, lng) {
  let map = new google.maps.Map(document.getElementById(mapId), {
    center: { lat: lat, lng: lng },
    zoom: 8
  });
  // Add a marker (optional)
  new google.maps.Marker({
    position: { lat: lat, lng: lng },
    map: map,
  });
}

$(document).ready(function () {
  $('.country-flag').click(function () {
    let target = $(this).data('target');
    $('.country-info').removeClass('active-page').hide();
    $('#' + target).addClass('active-page').fadeIn();
  });
});

$(document).ready(function () {

  // Function to handle country container click (main page logic)
  function handleCountryClick() {
    // Remove active class from all countries
    $('.country-container').removeClass('active');

    // Add active class to the clicked country
    $(this).addClass('active');

    let target = $(this).data('target');
    $('.country-info').removeClass('active-page').hide();
    $('#' + target).addClass('active-page').show();
  }

  // Attach the click handler to country containers on the main page
  $('.country-container').click(handleCountryClick);

  // Logic to hide the corresponding country section on individual country pages
  // Check if you are on a country-specific page based on URL or other criteria
  if (window.location.pathname.includes('south-sudan.html')) { 
    $('#south-sudan').hide(); 
  } else if (window.location.pathname.includes('kenya.html')) {
    $('#kenya').hide(); 
  } else if (window.location.pathname.includes('uganda.html')) {
    $('#uganda').hide(); 
  } else if (window.location.pathname.includes('lesotho.html')) {
    $('#lesotho').hide(); 
  }
  // ...add similar else if blocks for other countries... 

});