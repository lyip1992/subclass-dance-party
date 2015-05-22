var CrawlingDancer = function(top, left, timeBetweenSteps){
    Dancer.apply(this, arguments);

  this.$node.addClass('crawlingHomer').removeClass('dancer');

  this.timeBetweenSteps = timeBetweenSteps;

  this.step();

  this.setPosition(top, left);

  this.rotate = 0;

  this.absoluteRotation = 0;



  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

CrawlingDancer.prototype = Object.create(Dancer.prototype);
CrawlingDancer.prototype.constructor = CrawlingDancer;

CrawlingDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
   this.rotate +=10;

   if (this.rotate < 360) this.absoluteRotation = this.rotate;
   else this.absoluteRotation = this.rotate % 360;

   $('.crawlingHomer').css({transform: 'rotate(' + this.absoluteRotation + 'deg)'});

};
