// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer node"></span>');

  $('.line').on('click', function() {
    var position = $("body").height() / 2;
    this.$node.animate({top:position});
  }.bind(this));

  this.$node.on('mouseover', function() {
    $(this).css({transform: 'rotateY(180deg)'});
  });

  $('.interact').on('click', function(){

    var pixelsToNumber = function(string) {
      var newString = Array.prototype.slice.call(string);
      newString.pop().pop();
      return eval(newString.join());
    }

    for(var i = 0; i<window.dancers.length; i++){
      var length = this.$node.css('left') - window.dancers[i].$node.css('left');
      var height = (this.$node.css('top') - window.dancers[i].$node.css('top'));

      var squared = Math.pow(length, 2) + Math.pow(height, 2);
      var distance = Math.pow(squared, 0.5);

      if( distance < 150) {
        this.$node.css({top: '+=150px', left: '+=150px'});
        window.dancers[i].$node.css({top: '-=150px', left: '-=150px'});
      }
    }
  }.bind(this));

  this.timeBetweenSteps = timeBetweenSteps;

  this.step();

  this.setPosition(top, left);
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

