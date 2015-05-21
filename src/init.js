$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.line').on('click', function() {
    for( var i = 0; i < window.dancers.length; i++ ) {
      window.dancers[i].lineUp();
    }
  });

  $('body').on('mouseover', '.simpsons', function() {
    for( var i = 0; i < window.dancers.length; i++ ) {
      if ( window.dancers[i].move ) window.dancers[i].move();
    }
  });

  // click handler to do something based on their positions
  $('body').on('click', '.simpsons', function(){
    // iterate through app of the dancers
    for( var i = 0; i < window.dancers.length - 1; i++ ) {

      var distance = Math.pow(

          (
            Math.pow(
              (window.dancers[i].left - window.dancers[i + 1].left), 2
            )
          + Math.pow(
              (window.dancers[i].top - window.dancers[i + 1].top), 2
            )
          ), 0.5
        );
      if (
        distance < 150

      ) {

        window.dancer[i].css({top: '+=150px', left: '+=150px'});
        window.dancer[i+1].css({top: '-=150px', left: '-=150px'});

      }
    }

  });
      // calculate the distance between each dancer
        // if they're farther than 20px away, pair them up
});

