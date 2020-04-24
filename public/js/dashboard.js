// Once the document loads
$(document).ready(function () {
  // if something is being up dated reload the page
  const url = window.location.search;
  if (url.indexOf("?updated") !== -1) {
    window.location.href="/"
}
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
    window.location.assign("/grocery-list?list-id="+id);
  })
});