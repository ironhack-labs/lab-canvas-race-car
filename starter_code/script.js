window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var ctx = document.getElementsByClassName("juego")[0].getContext("2d");

  function startGame() {
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.fillRect(0, 0, 500, 700);

    CanvasRenderingContext2D.fill;

    ctx.fillStyle = "grey";
     ctx.beginPath();
    ctx.fillRect(40, 0, 225, 700);

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.fillRect(45, 0, 5, 700);

    ctx.beginPath();
    ctx.fillRect(254, 0, 5, 700);

    ctx.strokeStyle = "white";
    ctx.setLineDash([4, 14]);
    ctx.beginPath();
    ctx.moveTo(150, 0);
    ctx.lineTo(150, 700);
    ctx.stroke();

    var car = new car(200);

  
    function move(){
      car.move();
    }
  
    document.onkeydown = function (e){
      switch(e.keyCode){
  
      case 37: car.moveLeft();
      case 39: car.moveLeft();
      }
    }


  function updateCanvas() {
    ctx.clearRect(0, 0, 1000, 1000);
    car.move();
    car.draw(ctx);
    window.requestAnimationFrame(updateCanvas);
  }

  window.requestAnimationFrame(updateCanvas);

  
  }
}
        function car(x) {
        this.x = x;
        /*     this.y = y; */
          this.maxSpeed = 1;
          this.sX = 1;
          this.sY = 1;
          this.img = new Image();
          this.img.src = "./images/car.png";
      
        }
    
        car.prototype.draw = function (){
        ctx.fillText(car + this.x, 143,130,15);
        ctx.drawImage(this.img , 143, 130, 15, 12);
        };


  car.prototype.moveLeft = function() {
    this.sX = -this.maxSpeed;
  };
  car.prototype.moveRight = function() {
    this.sX = this.maxSpeed;
  };

  car.prototype.move = function() {
    this.x += this.sX;
    this.y += this.sY;
  };

 
