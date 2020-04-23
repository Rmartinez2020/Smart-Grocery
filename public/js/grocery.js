$(document).ready(function () {
    // Set Global Variables
    const url = window.location.search;
    const updatingList = false;
    let listId;
    const name = $("#name");
    // Handle button click
    $(".make-list").on("submit",handleSubmit(event))

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
         // Create an object with the information from the form and the users id
         const List = {
            name: $("#name").val().trim(),
            items: $("#items").val().trim(),
            UserId: data.id
        }
        if(updatingList){
            $.update("/")
        }
        // Get the users id
        $.get("/auth/user", function (data) {
            // Post new list to DB
            $.post("/api/newList", List, function () {
                // Reload the page
                window.location.reload();
            })
        })
    };
    // Get one grocery list
    function getGroceryList(id) {
        $.get("/api/groceries/"+id , list => {
            //put the data in th form
            name.val(list.name);
            $("#items").val(list.items);
            //set updating to true
           updatingList = true;
        })
    }
})