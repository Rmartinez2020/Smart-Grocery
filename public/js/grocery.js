$(document).ready(function () {
    // Set Global Variables
    const url = window.location.search;
    let updatingList = false;
    let listId;
    const name = $("#name");
    // Handle button click
    $(".make-list").on("submit", handleSubmit)

    if (url.indexOf("?list-id=") !== -1) {
        //set the list id
        listId = url.split("=")[1];
        console.log(listId);
        getGroceryList(listId);
    }
    // When the form is submitted
    function handleSubmit(event) {
        // prevent page reload
        event.preventDefault();
        // Create an object with the information from the form
        const List = {
            name: $("#name").val().trim(),
            items: $("#items").val().trim(),
        }
        if (updatingList) {
            //get the user id and add it to object
            $.get("/auth/user").then(function (data) {
                List.UserId = data.id
                $.post("/api/groceries/" + listId, List, function () {
                    console.log("List Updated");
                    window.location.assign("/");
                })
            })
        } else {
            // Post new list to DB
            $.post("/api/newList", List, function () {
                // Reload the page
                window.location.reload();
            })
        }

    };
    // Get one grocery list
    function getGroceryList(id) {
        $.get("/api/groceries/" + id, list => {
            //put the data in th form
            name.val(list.name);
            $("#items").val(list.items);
            //set updating to true
            updatingList = true;
        })
    }
})