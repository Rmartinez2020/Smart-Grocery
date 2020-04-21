$(document).ready(function () {
// import Axios from "axios"
// call geocode

// geocode();
// function geocode(){
// var location = "22 Main st Boston MA";
// axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
//     params: {
//         address: location,
//         key: "AIzaSyD9Ff1tE0-VCQ6xdBVIecM05QkaMPvHlGU "
//     }

// }).then( function(response){
//     console.log(response)
// })
// .catch(function(err){
//     console.log(err)
// })
// }


    // global variables
    let lat = 0;
    let long = 0;


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

                // // append them on a card div
                // var div = $("<p>").addClass("card-name").text(element.name);
                // var location = $("<p>").addClass("card-location").text(element.vicinity);
                // var images1 = $("<img>").attr("src", element.icon)
                // // append the five location on the html

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
                      <p class="title is-4">${element.name}</p>
                      <p class="subtitle is-6">${element.vicinity}</p>
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