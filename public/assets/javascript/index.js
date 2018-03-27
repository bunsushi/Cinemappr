$(document).ready(function () {

    console.log("I got linked!");

    //looping through multiple background images function
    $(function () {
        var images = ['reel.jpg', 'popcorn.jpg', 'ticket.jpg'];
        $('.welcome').css({ 'background-image': 'url(assets/images/homepage-images/' + images[Math.floor(Math.random() * images.length)] + ')' });

        console.log("testing")
    });

    $(function () {
    var quotes = [
        "“You talkin’ to me?” (Taxi Driver, 1976)",
        "“We’ll always have Paris” (Casablanca, 1942)",
        "“May the Force be with you” (Star Wars, 1977)",
        "“Oh, Cat.” (Breakfast at Tiffanys, 1961) "  
      ];
      var q = quotes[ Math.floor( Math.random() * quotes.length ) ];
      document.getElementById("movie-quote").innerHTML = q;     
  });

    // show and hide movie title and theater query options
    $(".more-options").on("click", function (event) {
        if ($("#options").text()==" More options") {
            $("#options").text(" Hide options");
            $("#toggle-sign").attr("class", "glyphicon glyphicon-minus-sign");
        } else {
            $("#options").text(" More options");
            $("#toggle-sign").attr("class", "glyphicon glyphicon-plus-sign");
        }
        $("#show-hide").fadeToggle("slow", "swing");

        return false;
    });

})