$(document).ready(function () {
    // Set Global Variables
    const url = window.location.search;
    const updatingList = false;
    let listId;
    const name = $("#name");

    if (url.indexOf("?list-id=") !== -1) {
        //set the list id
        listId = url.split("=")[1];
        console.log(listId);
        getGroceryList(listId);
    }
    // When the form is submitted
    $(".make-list").on("submit", function (event) {
        // prevent page reload
        event.preventDefault();
        // Get the users id
        $.get("/auth/user", function (data) {
            // Create an object with the information from the form and the users id
            const List = {
                name: $("#name").val().trim(),
                items: $("#items").val().trim(),
                UserId: data.id
            }
            // Post new list to DB
            $.post("/api/newList", List, function () {
                // Reload the page
                window.location.reload();
            })
        })
    });
    // Get one grocery list
    function getGroceryList(id) {
        $.get("/api/groceries/"+id , list => {
            name.val(list.name);
            $("#items").val(list.items);
            console.log(list.name);
            console.log(list.items);
        })
    }
})