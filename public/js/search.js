$(document).ready(function () {
    // On click for search button
    $(".search").on("submit", function (event) {
        // get the value from the input
        event.preventDefault();
        $(".recipes").empty();
        const param = $("#search-bar").val().trim();
        $.get("/api/recipe/" + param, data => {
            console.log(data);
            for (let index = 0; index < data.length; index++) {
                let cardDiv = $(`<div class="card my-4">`);
                let cardHeader = $(`<div class="card-header text-center">${data[index].name.toUpperCase()}</div>`);
                let cardBody = $(`<div class="card-body">${data[index].description}</div>`);
                cardDiv = cardDiv.append(cardHeader, cardBody);
                $(".recipes").append(cardDiv);
            }
        })
    });
});
