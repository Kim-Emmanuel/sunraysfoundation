function initMap() {
  const mapBox = document.getElementById('mapBox');
  if (!mapBox) {
    console.error("Map element not found!");
    return;
  }

  const lat = parseFloat(mapBox.getAttribute('data-lat'));
  const lng = parseFloat(mapBox.getAttribute('data-lon'));
  const zoom = parseInt(mapBox.getAttribute('data-zoom'));
  const info = mapBox.getAttribute('data-info'); // No need to parse

  if (isNaN(lat) || isNaN(lng) || isNaN(zoom)) {
    console.error("Invalid map data attributes! Check lat, lng, and zoom.");
    return;
  }

  const mapOptions = {
    center: { lat: lat, lng: lng },
    zoom: zoom,
  };

  const map = new google.maps.Map(mapBox, mapOptions);


  if (info) { // Only create marker if 'data-info' is present
    new google.maps.Marker({
      position: mapOptions.center,
      map: map,
      title: info
    });
  }
}