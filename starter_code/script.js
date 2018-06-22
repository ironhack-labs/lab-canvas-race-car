window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  this.xDeadZone = xDeadZone;
  function startGame() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    /*ctx.fillStyle = "green"; //red
    ctx.fillRect(0, 0, 30, 700, "red");
    ctx.fillStyle = "gray";
    ctx.fillRect(30, 0, 390, 700);
    ctx.clearRect(40, 0, 10, 700);
    ctx.strokeStyle = "white";
    ctx.setLineDash([30, 40]);
    ctx.moveTo(225, 0);
    ctx.lineTo(225, 700);
    ctx.stroke();
    ctx.clearRect(400, 0, 10, 700);
    ctx.fillStyle = "green";
    ctx.fillRect(420, 0, 30, 700);*/
    function Car(){
      this.x = 220;
      this.y = 550;
      this.maxSpeed = 1;
      this.sX = 100;
      this.img = new Image(); 
      this.img.src = "images/car.png";

    }

    
    var object1 = {
      x: Math.floor((Math.random()*300)),
      y: 0,
      width: 180,
      height: 40,
      
      }

    var object2 = {
      x: Math.floor((Math.random()*300)),
      y: 0,
      width: 180,
      height: 40,
      }

    var object3 = {
      x: Math.floor((Math.random()*300)),
      y: 0,
      width: 180,
      height: 40,
      }

    var object4 = {
      x: Math.floor((Math.random()*300)),
      y: 0,
      width: 180,
      height: 40,
      }
     
    Car.prototype.moveLeft = function() { this.sX = -this.maxSpeed*10 }
    Car.prototype.moveRight = function() { this.sX = this.maxSpeed*10 }
    Car.prototype.move = function() {
      this.x += this.sX;
    }
    Car.prototype.draw = function(ctx) { 
      imgScale=640/480;
      ctx.drawImage(this.img, this.x, this.y, 45 * imgScale, 105); 
    }
    var car = new Car();
    function move(){
      car.move();
    }
    
    function draw(ctx) {
      car.draw(ctx);
    }
    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37: 
          if(car.x > 50){
          car.moveLeft();
          move()
      }
        break;
        case 39: 
          if(car.x < 330){
          car.moveRight(); 
          move();
      }
        break;
      }
    };
    var lastTime = 0;
    function updateCanvas(time) {
      var delta = time-lastTime;
      lastTime = time; 
  
      var speedPxSec = 50;
      var speed  = (speedPxSec / 1000) * delta;
  
  
 
      object1.y = (object1.y + speed*1.5) % 700;
      object2.y = (object2.y + speed*2) % 700;
      object3.y = (object3.y + speed) % 700;
      object4.y = (object4.y + speed*0.75) % 700;
      ctx.clearRect(0, 0, 450, 700);
      ctx.fillStyle = "green";
      ctx.fillRect(0, 0, 30, 700);
      ctx.fillStyle = "gray";
      ctx.fillRect(30, 0, 390, 700);
      ctx.clearRect(40, 0, 10, 700);
      ctx.strokeStyle = "white";
      ctx.fillStyle = "white";
      ctx.setLineDash([30, 40]);
      ctx.moveTo(225, 0);
      ctx.lineTo(225, 700);
      for (var i = 1; i< 100; i++){
      ctx.fillStyle = "red";
      ctx.fillRect(object1.x, object1.y, object1.width, object1.height);
      ctx.fillRect(object2.x, object2.y, object2.width, object2.height);//ctx.fillRect(object.x, y2, object.width, object.height);
      ctx.fillRect(object3.x, object3.y, object3.width, object3.height);//ctx.fillRect(object.x, y3, object.width, object.height);
      ctx.fillRect(object4.x, object4.y, object4.width, object4.height);//ctx.fillRect(object.x, y4, object.width, object.height);
      ctx.stroke();
      }
      ctx.clearRect(400, 0, 10, 700);
      ctx.fillStyle = "green";
      ctx.fillRect(420, 0, 30, 700);
      //move()
      draw(ctx);
      window.requestAnimationFrame(updateCanvas);
    }

    window.requestAnimationFrame(updateCanvas);
  }
};