$(document).ready(function () {
    // On click for search button
    $(".search").on("submit", function (event) {
        // get the value from the input
        event.preventDefault();
        //empty search data
        $(".recipes").empty();
        const param = $("#search-bar").val().trim();
        // Do a get using the param
        $.get("/api/recipe/" + param, data => {
            console.log(data);
            //put the data on the page
            for (let i = 0; i < data.length; i++) {
                let cardDiv = $(`<div class="card my-4">`);
                let cardHeader = $(`<div class="card-header text-center">${data[i].name.toUpperCase()}</div>`);
                let cardBody = $(`<div class="card-body">`);
                let description = $(`<p> Description:</br> ${data[i].description.toUpperCase()}</p>`);
                let time = $(`<p> Time to make: ${data[i].minutes} minutes</p>`);
                cardBody.append(description,time);
                cardDiv.append(cardHeader, cardBody);
                $(".recipes").append(cardDiv);
            }
        })
    });
});
