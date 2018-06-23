var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//test
//ctx.fillRect(0,0,canvas.width,canvas.height);

window.onload = function() {
 
  //constants
  var interval;

  //classes
  function Rectangle(x, y, width, color) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 50;
    this.height = 960;
    this.color = color || "gray";
      
    this.draw = function() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }    
  
  function Car(image, x, y, width, height) {
    this.image = image;
    this.x = x ? x : 0;
    this.y = y ? y : 0;
    this.width = width ? width : 0;
    this.height =  height ? height : 0;
    this.direction = "right";
    this.image.onload = function() {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }
 
  function DottedLine(x, y, big, small, color) {
    this.x = x || 0;
    this.y = y || 0; 
    this.big = big || 15;
    this.small = small || 5;
    this.color = color || "white";
    this.draw = function() {
      ctx.beginPath();
      ctx.setLineDash([this.big, this.small]);
      ctx.moveTo(this.x + 200, this.y + 1);
      ctx.lineTo(this.x + 400, this.y + 400);
      ctx.stroke();
    }
  }
  
  //instances
  var greenRectangle = new Rectangle(0, 0, 40, "green");
  var whiteRectangle = new Rectangle(60, 0, 20, "white" );
  var greenRectangle2 = new Rectangle(472, 0, 40, "green");
  var whiteRectangle2 = new Rectangle(432, 0, 20, "white");
  var whiteDottedLine = new DottedLine(100, 100, 15, 5, "black");
  var car = new Car("./images/car.png", 250, 800);

  //main functions
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    greenRectangle.draw();
    whiteRectangle.draw();
    greenRectangle2.draw();
    whiteRectangle2.draw();
    car.image.onload();
    whiteDottedLine.draw();
  }
  
  function startGame() {
    update();
  }


  //listeners
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  addEventListener('keydown', function(e) {
    switch(e.keyCode) {
      case 39:
      car.direction = "right";
      break;
      case 37:
      car.direction = "left";
      break;
    }
  });

}
