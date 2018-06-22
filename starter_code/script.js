window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    
    function road() {
      //Asfalto
      ctx.fillStyle = "#979A9A";
      ctx.fillRect(15, 0, 300, 600);
      //Verdes
      ctx.fillStyle = "#229954";
      ctx.fillRect(0, 0, 30, 600);
      ctx.fillRect(300, 0, 30, 600);
      //Blancas laterales
      ctx.fillStyle = "#FFF";
      ctx.fillRect(40, 0, 5, 600);
      ctx.fillRect(285, 0, 5, 600);
      //Discontinua central
      ctx.strokeStyle = "#FFF";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.setLineDash([20, 30])
      ctx.moveTo(165, 10);
      ctx.lineTo(165, 600);
      ctx.stroke();
    }
    

    //Car
    function Car(x, y, img){
      this.x = x;
      this.y = y;
      this.maxSpeed = 1;
      this.sX = 1;
      this.img = new Image(); 
      this.img.src = img;
    }

    Car.prototype.moveLeft = function() { 
      this.sX = -this.maxSpeed;
    }
    Car.prototype.moveRight = function() { 
      this.sX = this.maxSpeed;
    }
    Car.prototype.move = function() {
      this.x += this.sX;
      this.y += this.sY;
    }

    Car.prototype.draw = function(ctx) { 
      imgScale = 158/310;
      ctx.drawImage(this.img, 140, 480, 80*imgScale, 80); 
    }

    var car = new Car (140, 480, "images/car.png");

    function draw(ctx){
      road();
      car.draw(ctx);
    }

    //Moves
    function move(){
      car.move();
    }

    document.onkeydown = function(e) {
      console.log("push")
      switch (e.keyCode) {
        case 37: 
          car.moveLeft(); 
          break;
        case 39: 
          car.moveRight(); 
          break;
      }
    }

  //Update canvas
  function updateCanvas() {
    ctx.clearRect(0,0,1500,1700);
    move();
    draw(ctx);
    window.requestAnimationFrame(updateCanvas);
  }
  window.requestAnimationFrame(updateCanvas);

  }



};
