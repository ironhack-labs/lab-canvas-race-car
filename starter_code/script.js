let interval, openingTrack;
let restartFlag = false;

//Gameplay
// let Game = function() {
//   this.obstacles = [];
//   this.frames = 0;
//   this.canvas = document.createElement("canvas"),
//   this.margen = 40;
//   this.paintCanvas = function () {

//   }
// }

let myGame = {
  obstacles : [],
  frames : 0,
  canvas : document.createElement("canvas"),
  margen : 40,
  paintCanvas : function () {
    let padding = 20;
    let lineWidth = 4;
    this.frames++;
    this.canvas.width = 400;
    this.canvas.height = 600;
    this.leftBoundary = this.margen;
    this.rightBoundary = this.canvas.width- this.margen;
    this.ctx = this.canvas.getContext("2d");
    // this.canvas.style = "float: left"
    document.getElementById("game-board").appendChild(this.canvas);
    this.ctx.fillStyle = "#33AA88";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height); //Pasto
    this.ctx.fillStyle = "#888888";
    this.ctx.fillRect(this.margen, 0, this.canvas.width-(this.margen*2), this.canvas.height); //Asfalto
    //Línea sólida de en medio
    this.ctx.clearRect((this.canvas.width/2)-(lineWidth/2), 0, lineWidth, this.canvas.height);
    //Las de los márgenes
    this.ctx.clearRect(this.margen + padding, 0, lineWidth*2, this.canvas.height);
    this.ctx.clearRect(this.canvas.width - (this.margen + padding + lineWidth*2), 0, lineWidth*2, this.canvas.height);
    myCar.displayCar();
    this.obstacles.forEach(el => el.draw());
  },

  clearCanvas : function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  checkGameOver : function()  {
    if (myCar.checkCollision() === true) {
      clearInterval(interval);
      openingTrack.setAttribute("src", "audio/lostLife.mp3");
      restartFlag = true;
    }
  },
  makeObstacle : function() {
    if (this.frames % 70 !== 0) return; //Sal si no es divisible entre 200
    let minGap = myCar.carWidth*1.50;
    let maxGap = myCar.carWidth*2.90;
    let minWidth = this.margen;
    let maxWidth = this.canvas.width - this.margen - maxGap;
    let randomGap = Math.floor(Math.random()*(maxGap - minGap)+1) + minGap;
    let randomWidth = Math.floor(Math.random()*(maxWidth - minWidth) + 1) + minWidth;
    console.log("made obs", randomWidth, randomGap)
    
    obsLeft = new Obstacle(0, randomWidth, "#953735");
    obsRight = new Obstacle(randomWidth+randomGap, this.canvas.width-(randomWidth+randomGap), "#953735");
    this.obstacles.push(obsLeft);
    this.obstacles.push(obsRight);
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
    myGame.ctx.drawImage(img, car.x, car.y, car.carWidth, car.carHeight);
  },

  this.checkCollision = function() {
    let choco = false;
    myGame.obstacles.forEach(el => {
      if (
        (this.top < el.bottom) &&
        (this.bottom > el.top) &&
        (this.right > el.left) &&
        (this.left < el.right)
        ) {
        choco = true;
      }
    });
    return choco;
  }
}

function Obstacle(x, width, color) {
  this.x = x;
  this.y = 0;
  this.color = color;
  this.width = width;
  this.height = 10;
  this.draw = function() {
    this.y += 7;
    this.left = this.x;
    this.right = this.x + this.width;
    this.top = this.y;
    this.bottom = this.y + this.height;
    myGame.ctx.fillStyle = this.color;
    myGame.ctx.fillRect(this.x, this.y, this.width, this.height);
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
  myGame.checkGameOver();
  myGame.makeObstacle()
  myGame.clearCanvas();
  myGame.paintCanvas();
}

function randomMusic() {
  let number = Math.floor(Math.random()*3)
  switch (number) {
    case 0:
      return "audio/fireField.mp3";
    case 1:
      return "audio/portTown.mp3";
    case 2:
      return "audio/bigBlue.mp3";
  }
}

// function drawRoad() {
  
window.onload = function() {
  let baseSpeed = 1;
  //Audio
  openingTrack = document.createElement("audio");
  openingTrack.autoplay = true;
  openingTrack.setAttribute("id", "mediaplayer")
  openingTrack.setAttribute("src", "audio/fzeroOpening.mp3");
  document.body.appendChild(openingTrack);
  document.onclick = function() {
    openingTrack.play();
  }

  document.getElementById("start-button").onclick = function() {
    //myGame = new Game();
    startGame();
    openingTrack.setAttribute("src", randomMusic());
    openingTrack.play();
    interval = setInterval(updateGame, 20);
  }

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
    }
  }

  document.onkeyup = function(e) {
    myCar.xSpeed = 0;
    myCar.ySpeed = 0;
  }
};