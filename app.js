//This app will generate GIFs based on a set of buttons on the web page.

//This array contains a set of topics, from which HTML buttons will be made
var topics = ["heavy metal", "math", "astronomy", "shakespeare", "stephen king"];

function generateButtons() {

    for (i = 0; i <= topics.length - 1; i++) {
        $("#buttonDiv").append("<button name='gifButton' value='" + topics[i] + "'>" + topics[i] + "</button>");
    }

};

//A button's value will be assigned to the variable q upon clicking it. Here, q is declared as a global variable.
var q;

generateButtons();

//Key for the Giphy API:
var APIKey = "B27Fi15mjSRFQC15ZFdFcvK5Xkenf29B";

$("button").on("click", function() {
    //Assigning the value of the clicked button to the q variable
    q = $(this).val();

    //Declaring the Giphy API's query URL as a variable, incorporating our API key and search term
    //The "&limit5" will produce 5 results per click
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + q + "&api_key=" + APIKey + "&limit=5";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;

        //Create a div, with a GIF inside, for each of the results
        for (i = 0; i < results.length; i++) {
        //Div to hold the GIF
        var gifDiv = $("<div class='item'>");
        //Get the age-appropriateness rating of the GIF
        var rating = results[i].rating;
        //Add rating to a paragraph
        var p = $("<p>").text("Rating: " + rating);
        //Create an img tag for the gif
        var personImage = $("<img>");
        //Assign the GIF's url to the img tag's src attribute
        personImage.attr("src", results[i].images.fixed_height.url);
        //Add the paragraph and img tags to the GIF div
        gifDiv.prepend(p);
        gifDiv.prepend(personImage);
        //Add the GIF div to the container
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