$(document).ready(function () {
    let id = window.location.search.split("=")[1];
    let select = $("#list")
    $.get("/api/one-recipe/" + id, recipe => {
        console.log(recipe);
        // create a form
        $.get("/auth/user",userdata => {
            $.get("/api/user-groceries/"+userdata.id, lists =>{
                lists.forEach(list => {
                    select.append(createListOption(list))
                });
            })
        })
        // create ingredients card

        // make ingredients an array
        let newIngredients = []
        let ingList = $("<ul class='list-group'>");
        let ingredients = recipe[0].ingredients.split(",");
        ingredients.forEach(element => {
            newIngredients.push(element.replace("[", "").replace("]", "").replace("'", "").replace("'", ""));
        });
        for (let index = 0; index < newIngredients.length; index++) {
            ingList.append($(`<li class="list-group-item" id=${index}>${newIngredients[index]}</li>`));
        }
        let ingCard = $(`<div class="card my-4">`);
        let cardHeader = $(`<div class="card-header">Ingredients:</div>`);
        let cardBody = $(`<div class="card-body">`);
        cardBody.append(ingList);
        ingCard.append(cardHeader, cardBody)
        // create steps card

        // make steps into an array
        let newSteps = [];
        let stepsList = $("<ul class='list-group'>");
        let steps = recipe[0].steps.split("',")
        steps.forEach(element => {
            newSteps.push(element.replace("[", "").replace("'", "").replace("']", ""))
        });
        for (let index = 0; index < newSteps.length; index++) {
            stepsList.append($(`<li class="list-group-item" id=${index}>${newSteps[index]}</li>`));
        }
        let stepsCard = $(`<div class="card my-4">`);
        let stepsCardHeader = $(`<div class="card-header">Steps:</div>`);
        let stepsCardBody = $(`<div class="card-body">`);
        stepsCardBody.append(stepsList)
        stepsCard.append(stepsCardHeader, stepsCardBody)
        let name = $(`<h1>${recipe[0].name.toUpperCase()}</h1>`);
        $(".ing-view").prepend(ingCard)
        $(".steps-view").append(stepsCard)
        $(".main").prepend(name)
    })
    $("#add").on("submit", function (event) {
        event.preventDefault()
    })

    // Creates newlist options in the dropdown
    function createListOption(list) {
        var listOption = $("<option>");
        listOption.attr("value", list.id);
        listOption.text(list.name);
        return listOption;
    }
});