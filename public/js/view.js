$(document).ready(function () {
    let id = window.location.search.split("=")[1];

    $.get("/api/one-recipe/" + id, recipe => {
        console.log(recipe);
        let name = $(`<h1>${recipe[0].name}</h1>`)
        $(".recipe-view").append(name)
    })
});