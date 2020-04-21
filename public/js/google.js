

function initMap() {
  var sydney =
  {
      lat: 28.5383,
      lng: 81.3792
  };
  map = new google.maps.Map(document.getElementById('map'), {
      center: sydney,
      zoom: 12,
      mapTypeId: 'roadmap',

  });
  // get user current location
  var map = new google.maps.Map(document.getElementById('map'),
   map);

   if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(function (position) {
           initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
           map.setCenter(initialLocation);
       });
   }
 
}


$(document).ready(function () {
  // global variables
  let lat = 0;
  let long = 0;

  // get current location with lat and long
  navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    console.log(lat + "and" + long);

  });


  $("#grocery").click(function (e) {
    e.preventDefault();
    console.log(lat + "and" + long + "inside of the click");
    $("#display-case").empty()

    var winery = "grocery"
    //Query for google places

    const queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&radius=8000&keyword=" + winery + "&key=AIzaSyD9Ff1tE0-VCQ6xdBVIecM05QkaMPvHlGU"

    //AJAX Call to Places API
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(function (response) {
      console.log(response);
      // loop for the five nearest location
      for (var i = 0; i < 9; i++) {
        var element = response.results[i];
        console.log(element);

        let card = `
              <div class="card">
        
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src="${element.icon}" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="media-content">
                      <p>${element.name}</p>
                      <p>${element.vicinity}</p>
                    </div>
                  </div>
            
                </div>
              </div>
                
                `;

        $("#display-case").append(card);

      }
    })
      .catch(function (err) {
        console.log(err);
      })
  });

});

