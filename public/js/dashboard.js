// Once the document loads
$(document).ready(function () {
 
  //delete button function
  $(".delete-list").click(function (event) {
    // Prevent page reload
    event.preventDefault();
    // Get the list id
    const id = $(this).data("listid");
    // do a delete to the database
    $.ajax({ url: "/api/grocery-list/" + id, method: "DELETE" })
      .then(function (data) {
        //reload the page
        window.location.reload();
      })
      .catch(function (err) {
        if (err) throw err;
      });
  })
  // when edit button clicked
  $(".edit-list").click(function (event) {
    event.preventDefault();
    // Grab the id
    const id = $(this).data("listid");
    // Go to make a list page
    window.location.assign("/add-recipe?list-id="+id);
  })
});