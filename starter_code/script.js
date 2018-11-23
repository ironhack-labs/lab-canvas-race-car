let myGame = {
  canvas : document.createElement("canvas"),
  paintCanvas : function () {
    let margen = 40;
    let padding = 20;
    let lineWidth = 4;
    this.canvas.width = 400;
    this.canvas.height = 600;
    this.leftBoundary = margen;
    this.rightBoundary = this.canvas.width-margen;
    this.ctx = this.canvas.getContext("2d");
    // this.canvas.style = "float: left"
    document.getElementById("game-board").appendChild(this.canvas);
    this.ctx.fillStyle = "#33AA88";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height); //Pasto
    this.ctx.fillStyle = "#888888";
    this.ctx.fillRect(margen, 0, this.canvas.width-(margen*2), this.canvas.height); //Asfalto
    //Línea sólida de en medio
    this.ctx.clearRect((this.canvas.width/2)-(lineWidth/2), 0, lineWidth, this.canvas.height);
    //Las de los márgenes
    this.ctx.clearRect(margen + padding, 0, lineWidth*2, this.canvas.height);
    this.ctx.clearRect(this.canvas.width - (margen + padding + lineWidth*2), 0, lineWidth*2, this.canvas.height);
    myCar.displayCar();
  },

  clearCanvas : function() {
    console.log("Cleared!");
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

//Constructor de jugador
function RaceCar() {
  this.yOffset = 100;
  this.carWidth = 400/10; //myGame.canvas.width/10;
  this.carHeight = 600/8;//myGame.canvas.height/8;
  this.x = 200 - this.carWidth/2;//(myGame.canvas.width / 2) - this.carWidth/2;
  this.y = 600 - this.yOffset;//myGame.canvas.height - this.yOffset;
  this.xSpeed = 0; //Inicia sin movimiento
  this.ySpeed = 0;
  this.displayCar = function() {
    let car = this;
    this.top = this.y;
    this.bottom = this.y + this.carHeight;
    this.left = this.x;
    this.right = this.x + this.carWidth;
    if (this.left > myGame.leftBoundary && this.right < myGame.rightBoundary) {
      this.x += this.xSpeed;
    }
    else if (this.left <= myGame.leftBoundary){
      this.x = myGame.leftBoundary+2;
    }
    else if (this.right >= myGame.rightBoundary){
      this.x = myGame.rightBoundary-this.carWidth-2;
    }
    
    if (this.bottom < myGame.height && this.top > 0) {
      this.y += this.ySpeed;
    }
    else if (this.bottom >= myGame.canvas.height) {
      this.y = (myGame.canvas.height - this.carHeight) - 20;
    }
    else if (this.top <= 0) {
      this.y = 2;
    }

    this.y = this.y + this.ySpeed;
    let img = new Image();
    img.src = "images/car.png";
    //Cargar, aguas con el contexto
    img.onload = function() {
      myGame.ctx.drawImage(img, car.x, car.y, car.carWidth, car.carHeight);
    };
  }
}
//Instanciar clase
let myCar = new RaceCar();

//Iniciar juego
function startGame() {
  myGame.paintCanvas();
}

//Actualizar: borrar y volver a pintar todo
function updateGame() {
  myGame.clearCanvas();
  myGame.paintCanvas();
}

// function drawRoad() {
  
window.onload = function() {
    let baseSpeed = 1;
    
    let openingTrack = document.createElement("audio");
    openingTrack.autoplay = true;
    openingTrack.setAttribute("id", "mediaplayer")
    openingTrack.setAttribute("src", "audio/fzeroOpening.mp3");
    document.body.appendChild(openingTrack);

  document.onclick = function() {
    openingTrack.play();
  }

  document.getElementById("start-button").onclick = function() {
    startGame();
    openingTrack.setAttribute("src", "audio/fireField.mp3");
    openingTrack.play();
    setInterval(updateGame, 20);
  };

  document.onkeydown = function(e) {
    key = e.keyCode;
    switch (key) { // Convertirlo en todas direcciones
      case 38: // Arriba
        myCar.ySpeed -= baseSpeed;
        break;
      case 40: // Abajo
        myCar.ySpeed += baseSpeed;
        break;
      case 37: //Izquierda
        myCar.xSpeed -= baseSpeed;
        break;
      case 39: //Derecha
        myCar.xSpeed += baseSpeed;
        break;
      //cases
    }
  }

  document.onkeyup = function(e) {
    myCar.xSpeed = 0;
    myCar.ySpeed = 0;
  }
};
  // }