async function initMap() {
      const map = new google.maps.Map(document.getElementById("mapBox"), {
        center: { lat: 37.7749, lng: -122.4194 }, // Default center (San Francisco)
        zoom: 13,
      });



        // Example: Geocode an address
        const address = "1600 Amphitheatre Parkway, Mountain View, CA";
        geocodeAddress(map, address);

}

    async function geocodeAddress(map, address) {
      try {
        const response = await fetch(`/api/geocode?address=${encodeURIComponent(address)}`);
        const data = await response.json();


        if (data.results && data.results.length > 0) {
          const location = data.results[0].geometry.location;
          map.setCenter(location);


          new google.maps.Marker({
            map: map,
            position: location,
            title: address,

          });


        } else {
          console.error("Geocoding failed:", data);
          // Handle geocoding failure, e.g., display an error message to the user.
        }

      } catch (error) {
        console.error("Error fetching geocoding data:", error);
        // Handle the error appropriately (e.g., display an error message).

      }


    }