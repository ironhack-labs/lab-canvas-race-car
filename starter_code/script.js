function Board(){
    this.ctx = document.getElementById("canvas").getContext("2d");
    this.draw();
    this.car = new Car(this.ctx);
    this.car.drawcar();
  }

  Board.prototype.draw = function(){ //definir ce qu'il faut dessiner
    this.ctx.fillStyle ="green";
    this.ctx.fillRect(30, 30, 400, 800);
    this.ctx.fillStyle ="grey";
    this.ctx.fillRect(60, 30, 300, 800);
    this.ctx.beginPath();
    this.ctx.moveTo(70, 30);
    this.ctx.lineTo(70, 800);
    this.ctx.lineWidth =8;
    this.ctx.strokeStyle = '#ffffff';
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.moveTo(350, 30);
    this.ctx.lineTo(350, 800);
    this.ctx.lineWidth =8;
    this.ctx.strokeStyle = '#ffffff';
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.moveTo(200, 30);
    this.ctx.lineTo(200, 800);
    this.ctx.setLineDash([1,5]);
    //ctx.lineWidth =8;
    this.ctx.strokeStyle = '#ffffff';
    this.ctx.stroke();
    this.ctx.closePath();
  };
  
  // car(ctx) is a function
  function Car(ctx) {
    this.x= 50; //this car fait référence à ctx
    this.y= 50;
    this.ctx = ctx;
    this.moveUp= function() { this.y -= 50 };
    this.moveDown=  function() { this.y += 50 };
    this.moveLeft=  function() { this.x -= 50 };
    this.moveRight= function() { this.x += 50 };
  };

  Car.prototype.drawcar= function (){
    var img = new Image ();
    img.onload = function() { 
       this.ctx.drawImage(img, this.x-25, this.y-50, 50, 100)
    }
    img.src = "./images/car.png";
    }


    function startGame() { // pour commencer à dessiner
      Board();
      // drawcar();
    };

    window.onload = function() { //pour charger toute la page avant de commencer le jeu
      document.getElementById("start-button").onclick = function() { // on commence le jeu
        startGame();
      }
    }