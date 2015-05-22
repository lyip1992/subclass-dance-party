var RunningDancer = function(top, left, timeBetweenSteps){

  Dancer.apply(this, arguments);

  this.$node.addClass('runningHomer').removeClass('dancer');

  this.timeBetweenSteps = timeBetweenSteps;

  this.step();

  this.setPosition(top, left);



  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

RunningDancer.prototype = Object.create(Dancer.prototype);
RunningDancer.prototype.constructor = RunningDancer;

RunningDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.animate();

  // var size = Math.random() * 3;

  // $('.runningHomer').css({transform: 'scaleX(' + size + ')', });

};
