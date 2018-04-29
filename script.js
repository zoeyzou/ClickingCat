

//adding event listener for image clicking and reset button
var counter = 0;

$(document).ready(function() {

  $("#clickable-img").click(function() {
    counter++;
    if (counter === 100) {
      alert("Dude, you should take a rest!");
      counter = 0;
    }

    $("#text-area").text(counter);

  });

  $("body").on("click", "#my-btn", function() {
    counter = 0;

    $("#text-area").text(counter);
  });

});

