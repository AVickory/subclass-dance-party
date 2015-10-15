// Creates and returns a new dancer object that can step
var Dancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;

  this.step();  
  this.setPosition(top, left);
  this.setColor();
};
Dancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step

    setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
Dancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
    //console.log('inside dancer',this.$node.position());
};
Dancer.prototype.setColor = function () {
  var getGradObj = function () {
    var r1 = Math.floor(Math.random()*255);
    var g1 = Math.floor(Math.random()*255);
    var b1 = Math.floor(Math.random()*255);
    var a1 = Math.random();
    var r2 = Math.floor(Math.random()*255);
    var g2 = Math.floor(Math.random()*255);
    var b2 = Math.floor(Math.random()*255);
    var a2 = Math.random();

    var radGrad = 'radial-gradient(circle, ' + 'rgba('+r1+','+g1+','+b1+','+a1+'),' + 'rgba('+r2+','+g2+','+b2+','+a2+'))';

    return {'background': radGrad};


  }

  var r = Math.floor(Math.random()*255);
  var g = Math.floor(Math.random()*255);
  var b = Math.floor(Math.random()*255);
  this.$node.css(getGradObj());
}

Dancer.prototype.cssToNum = function (property) {
  var css = this.$node.css(property);
  return +css.substring(0, css.length - 2);
};

Dancer.prototype.checkPosition = function () {
    var vCenter = this.cssToNum('top') + this.cssToNum('height')/2;
    var hCenter = this.cssToNum('left') + this.cssToNum('width')/2;
    return {x: hCenter, y: vCenter};
}

