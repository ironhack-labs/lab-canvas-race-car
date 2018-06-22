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
      this.sY = 1;
      this.img = new Image(); 
      this.img.src = img;
    }

    Car.prototype.moveLeft = function() { 
      this.sX = -this.maxSpeed;
    }
    Car.prototype.moveRight = function() { 
      this.sX = this.maxSpeed;
    }
    Car.prototype.moveUp = function() {
      this.sY = -this.maxSpeed;
    }
    Car.prototype.moveDown = function() { 
      this.sY = this.maxSpeed;
    }
    Car.prototype.move = function() {
      this.x += this.sX;
      this.y += this.sY;
    }

    Car.prototype.draw = function(ctx) { 
      imgScale = 158/310;
      ctx.drawImage(this.img, 140, 480, 80*imgScale, 80); 
    }

    var car = new Car (25,25, "images/car.png");

    function draw(ctx){
      road();
      car.draw(ctx);
    }


    //var img = new Image();
    //imgScale = 158/310;
    //this.img.onload = function() {
    //  ctx.drawImage(img, 140, 480, 80*imgScale, 80)
    //}
    //img.src = "images/car.png"

    //Moves
    function move(){
      car.move();
    }

    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37: img.moveLeft(); img.moveLeft(); break;
        case 39: img.moveRight(); img.moveRight(); break;
        //case 38: img.moveUp();  img.moveUp(); break;
        //case 40: img.moveDown(); img.moveDown(); break;
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
