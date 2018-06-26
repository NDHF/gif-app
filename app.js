var topics = ["heavy metal", "math", "astronomy", "shakespeare", "stephen king"];

console.log(topics.length);

function generateButtons() {

    for (i = 0; i <= topics.length - 1; i++) {
        $("#buttonDiv").append("<button name='gifButton' value='" + topics[i] + "'>" + topics[i] + "</button>");
    }

};

var q;

generateButtons();

var APIKey = "B27Fi15mjSRFQC15ZFdFcvK5Xkenf29B";

//javascript, jQuery

// $("button").on("click", function() {

// q = $(this).val();
// console.log(q);

// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + q + "&api_key=" + APIKey + "&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });

// $("#gifDiv").append(data[0].images.fixed_height.url);

// });

$("button").on("click", function() {
    q = $(this).val();
    console.log(q);
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + q + "&api_key=" + APIKey + "&limit=5";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;

        console.log(results);
        console.log(results.data);

        for (i = 0; i < results.length; i++) {
          var gifDiv = $("<div class='item'>");

          var rating = results[i].rating;
          console.log(rating);

          var p = $("<p>").text("Rating: " + rating);

          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $(".gifDivContainer").prepend(gifDiv);
        }
      });
  });

// $(".gif").on("click", function() {
//     // STEP ONE: study the html above.
//     // Look at all the data attributes.
//     // Run the file in the browser. Look at the images.

//     // After we complete steps 1 and 2 we'll be able to pause gifs from giphy.

//     // STEP TWO: make a variable named state and then store the image's data-state into it.
//     // Use the .attr() method for this.

//     // ============== FILL IN CODE HERE FOR STEP TWO =========================

//     // CODE GOES HERE

//     var state = $(this).attr("data-state");

//     if (state === "still") {
//       $(this).attr("src", $(this).attr("data-animate"));
//       $(this).attr("data-state", "animate");
//     }

//      if (state === "animate") {
//       $(this).attr("src", $(this).attr("data-still"));
//       $(this).attr("data-state", "still");

//     }

// });