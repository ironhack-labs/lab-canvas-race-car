window.onload = function(){


  function Car(canvas, src, x, y, w, h) {

    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.image = new Image();
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.image.src = 'images/car.png';

  }
  
  Car.prototype.draw = function() {
    this.image.onload = function() {
      this.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    }.bind(this);
   
  }

  function Rectangle(canvas, x, y, w, h, color) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
  }
  
  Rectangle.prototype.draw = function() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
 
  };
  
  function Canvas(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.borders = [
      new Rectangle(this.canvas, 0, 0, this.canvas.width, this.canvas.height, '#00811A'),
      new Rectangle(this.canvas, 50, 0, 400, this.canvas.height, '#7F7F7F'),
      new Rectangle(this.canvas, 60, 0, 15, this.canvas.height, '#FFFFFF'),
      new Rectangle(this.canvas, 425, 0, 15, this.canvas.height, '#FFFFFF')];
    this.road = []
    this.car = new Car(this.canvas, 'images/car.png', 215, 600, 75, 150);
    this.fps = 60;
  }

  Canvas.prototype.generateLines = function() {
    var margin = 5
    for (var i = 0; i < 20; i ++) {
      this.road.push(new Rectangle(this.canvas, 250, margin, 10,35, '#FFFFFF'))
      margin += 65;
    }
  }
  
  Canvas.prototype.start = function() {
    this.generateLines();
    this.draw();
  };
  
  Canvas.prototype.draw = function() {

    this.borders.forEach(function(border) {
      border.draw();
    })

    this.road.forEach(function(lineRoad) {
      lineRoad.draw();
    })

    this.car.draw();

    // image.onload = function() {

    // }
    // this.ctx.drawImage(image, 250, 300, 100, 100);
  };
  
  var canvas = new Canvas("carGame");
  canvas.start();
  
}