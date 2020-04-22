$(document).ready(function () {
  $(".make-list").on("submit", function(event) {
    event.preventDefault();
    console.log("button clicked");
    $.get("/auth/user" ,function(data) {
      console.log(data)
      const List = {
        name: $("#name").val().trim(),
        items: $("#items").val().trim(),
        UserId: data.id
      }
      $.post("/api/newList", List, function() {
         window.location.reload();
      })
    })
    
  });
});