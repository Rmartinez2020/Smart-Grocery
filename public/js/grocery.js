// Once the document loads
$(document).ready(function () {
  // When the form is submitted
  $(".make-list").on("submit", function(event) {
    // prevent page reload
    event.preventDefault();
    // Get the users id
    $.get("/auth/user" ,function(data) {
      // Create an object with the information from the form and the users id
      const List = {
        name: $("#name").val().trim(),
        items: $("#items").val().trim(),
        UserId: data.id
      }
      // Post new list to DB
      $.post("/api/newList", List, function() {
        // Reload the page
         window.location.reload();
      })
    })
    
  });
  //delete button function
  $(".delete-list").click(function(event){
    event.preventDefault();
    const id = $(this).data("listid");
    console.log(id);
  })
});